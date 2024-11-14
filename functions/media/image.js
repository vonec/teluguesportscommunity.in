export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
  const id = url.searchParams.get("id"); // Get the ID from the query parameter

  if (!id) {
    return new Response("Image ID not specified", { status: 400 });
  }

  const cacheUrl = `https://docs.google.com/uc?export=open&id=${id}`;
  const cache = caches.default;
  const cacheKey = new Request(request.url, request); // Explicitly create cache key

  // Check if the response is already cached
  let cachedResponse = await cache.match(cacheKey);
  if (cachedResponse) {
    // Add a custom header indicating the source as Cloudflare Cache
    const responseFromCache = new Response(cachedResponse.body, cachedResponse);
    responseFromCache.headers.set("X-Cache-Source", "Cloudflare Cache");
    return responseFromCache;
  }

  // Fetch the image from Google Drive
  let response = await fetch(cacheUrl, {
    redirect: "follow",
    headers: {
      "User-Agent": "Mozilla/5.0",
      accept: "text/html",
    },
  });

  // Check for the download confirmation token
  if (
    response.headers.get("set-cookie") &&
    response.headers.get("set-cookie").includes("download_warning")
  ) {
    const text = await response.text();
    const confirmTokenMatch = text.match(/confirm=([a-zA-Z0-9_-]+)/);
    const confirmToken = confirmTokenMatch ? confirmTokenMatch[1] : null;

    if (confirmToken) {
      const confirmUrl = `https://docs.google.com/uc?export=open&confirm=${confirmToken}&id=${id}`;

      // Retry fetching with the confirmation token and set the necessary cookies
      response = await fetch(confirmUrl, {
        redirect: "follow",
        headers: {
          "User-Agent": "Mozilla/5.0",
          accept: "text/html",
          Cookie: response.headers.get("set-cookie"),
        },
      });
    } else {
      return new Response("Unable to retrieve confirmation token", {
        status: 500,
      });
    }
  }

  // Selectively include only necessary headers
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set(
    "Content-Type",
    response.headers.get("Content-Type") || "image/jpeg"
  );
  headers.set("Cache-Control", "public, max-age=2592000"); // Cache for 24 hours

  // Create a response with only the required headers
  const proxiedResponse = new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers,
  });

  // Cache the response for future requests using the defined cacheKey
  context.waitUntil(cache.put(cacheKey, proxiedResponse.clone()));

  // Set the X-Cache-Source header only for the direct response to the client
  proxiedResponse.headers.set("X-Cache-Source", "Google Drive");

  return proxiedResponse;
}
