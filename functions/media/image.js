export async function onRequestGet(context) {
  const { request, params } = context;
  const id = params.id; // Get the ID from the URL params

  if (!id) {
    return new Response("Image ID not specified", { status: 400 });
  }

  const cacheUrl = `https://docs.google.com/uc?export=open&id=${id}`;
  const cache = caches.default;

  // Check if the response is already cached
  let cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  // Fetch the image from Google Drive
  let response = await fetch(cacheUrl, {
    redirect: "follow",
    headers: {
      "User-Agent": "Mozilla/5.0",
      accept: "text/html",
    },
  });

  // Check for confirmation token
  if (
    response.headers.get("set-cookie") &&
    response.headers.get("set-cookie").includes("download_warning")
  ) {
    const text = await response.text();
    const confirmToken = text.split("confirm=")[1].split("&")[0];
    const confirmUrl = `https://docs.google.com/uc?export=open&confirm=${confirmToken}&id=${id}`;

    response = await fetch(confirmUrl, {
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0",
        accept: "text/html",
        Cookie: response.headers.get("set-cookie"),
      },
    });
  }

  // Set CORS headers and cache the response
  const proxiedResponse = new Response(response.body, response);
  proxiedResponse.headers.set("Access-Control-Allow-Origin", "*");
  proxiedResponse.headers.set("Content-Type", "image/jpeg"); // Adjust based on content type
  proxiedResponse.headers.append("Cache-Control", `public, max-age=${86400}`); // Cache for 24 hours

  // Cache the response for future requests
  context.waitUntil(cache.put(request, proxiedResponse.clone()));

  return proxiedResponse;
}
