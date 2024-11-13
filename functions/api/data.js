export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Extract query parameters
  const sheet = url.searchParams.get("s");
  const limit = url.searchParams.get("l");
  const sortByDate = url.searchParams.get("d");
  const deleteCache = url.searchParams.get("reset");

  // Define the Google Apps Script URL
  const GOOGLE_SHEET_API_URL =
    "https://script.google.com/macros/s/AKfycbyDPw2mF4sldz83pXI5948I7oJ3a0YQVsZt2c1MbWN1P_Ig1CtsTdlE3YoZcVGzt_I/exec";

  // Construct URL with query parameters
  const apiUrl = new URL(GOOGLE_SHEET_API_URL);
  if (sheet) apiUrl.searchParams.append("sheet", sheet);
  if (limit) apiUrl.searchParams.append("limit", limit);
  if (sortByDate) apiUrl.searchParams.append("sortByDate", sortByDate);

  // Construct a custom cache key
  const customKey = `${apiUrl.toString()}-sheet=${sheet || ""}-limit=${
    limit || ""
  }-sortByDate=${sortByDate || ""}`;
  const cacheKey = new Request(customKey);

  // Use Cloudflare Cache API
  const cache = caches.default;

  try {
    // Invalidate cache if `deleteCache` parameter is present
    if (deleteCache) {
      await cache.delete(cacheKey);
      return new Response(JSON.stringify({ message: "Cache cleared" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check cache first
    let response = await cache.match(cacheKey);
    if (!response) {
      console.log("Cache miss - fetching from origin");
      response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Google Apps Script API error: ${response.status}`);
      }

      // Clone the response before putting it in cache
      const responseClone = response.clone();
      await cache.put(cacheKey, responseClone);
      console.log("Response cached");
    } else {
      console.log("Cache hit");
    }

    // Return the response with CORS headers
    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error fetching data from Google:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
