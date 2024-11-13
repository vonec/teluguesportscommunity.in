const CACHE_TTL = 86400; // Cache for 24 hours

async function handleRequest(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return new Response("Image ID not specified", { status: 400 });
  }

  const cacheUrl = `https://docs.google.com/uc?export=open&id=${id}`;
  const cache = caches.default;

  // Check if we have a cached response
  let cachedResponse = await cache.match(cacheUrl);
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

  // Check if Google requires a confirmation token
  if (
    response.headers.get("set-cookie") &&
    response.headers.get("set-cookie").includes("download_warning")
  ) {
    const text = await response.text();
    const confirmToken = text.split("confirm=")[1].split("&")[0];
    const confirmUrl = `https://docs.google.com/uc?export=open&confirm=${confirmToken}&id=${id}`;

    // Re-fetch with the confirmation token
    response = await fetch(confirmUrl, {
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0",
        accept: "text/html",
        Cookie: response.headers.get("set-cookie"),
      },
    });
  }

  // Stream the response back to the client and cache it
  const { readable, writable } = new TransformStream();
  response.body.pipeTo(writable);
  let proxiedResponse = new Response(readable, response);

  // Set CORS headers to allow embedding in <img> tags
  proxiedResponse.headers.set("Access-Control-Allow-Origin", "*");
  proxiedResponse.headers.set("Content-Type", "image/jpeg"); // Set content type appropriately
  proxiedResponse.headers.append(
    "Cache-Control",
    `public, max-age=${CACHE_TTL}`
  ); // Set cache control headers

  // Cache the response for future requests
  event.waitUntil(cache.put(cacheUrl, proxiedResponse.clone()));

  return proxiedResponse;
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
