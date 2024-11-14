export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Extract query parameters
  const sheet = url.searchParams.get("s");
  const limit = parseInt(url.searchParams.get("l")) || 10; // Default to 10 items per page
  const page = parseInt(url.searchParams.get("page")) || 1; // Default to first page
  const sortByDate = url.searchParams.get("d") || "desc";
  const filterType = url.searchParams.get("t") || false; // upcoming / past
  const deleteCache = url.searchParams.get("reset");

  // Calculate the range based on page and limit
  const offset = (page - 1) * limit;

  // Define the Google Apps Script URL
  const GOOGLE_SHEET_API_URL =
    "https://script.google.com/macros/s/AKfycbyvMwnej61qGtMV7ex5UxGaEt4WhEbvAkcjr1igJvr1xQsNEUaAWUJKWvj0Q-xz6MTW/exec";

  // Construct URL with query parameters
  const apiUrl = new URL(GOOGLE_SHEET_API_URL);
  if (sheet) apiUrl.searchParams.append("sheet", sheet);
  if (limit) apiUrl.searchParams.append("limit", limit);
  if (offset >= 0) apiUrl.searchParams.append("offset", offset);
  if (sortByDate) apiUrl.searchParams.append("sortByDate", sortByDate);
  if (filterType) apiUrl.searchParams.append("filterType", filterType);

  console.log("API URL:", apiUrl.toString());
  // Construct a custom cache key based on query params, page, and limit
  const customKey = `${apiUrl.origin}${apiUrl.pathname}--*--sheet=${
    sheet || ""
  }-limit=${limit}-page=${page}-sortByDate=${sortByDate || ""}-filterType=${
    filterType || ""
  }`;
  console.log("Cache key:", customKey);

  // Use Cloudflare Cache API
  const cache = caches.default;

  try {
    // Invalidate cache if `deleteCache` parameter is present
    if (deleteCache) {
      await cache.delete(customKey);
      console.log("Cache cleared for key:", customKey);
      return new Response(JSON.stringify({ message: "Cache cleared" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check cache first
    let response = await cache.match(customKey);
    if (response) {
      console.log("Cache hit - serving from cache for key:", customKey);
    } else {
      console.log("Cache miss - fetching from origin for key:", customKey);
      response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Google Apps Script API error: ${response.status}`);
      }

      // Clone the response before putting it in cache
      const responseClone = response.clone();
      console.log("Attempting to store response in cache for key:", customKey);

      // Optional: Modify headers if needed (e.g., to enable caching)
      const cachedResponse = new Response(responseClone.body, responseClone);
      cachedResponse.headers.set("Cache-Control", "public, max-age=86400"); // Cache for 1 day

      await cache.put(customKey, cachedResponse);
      console.log("Response cached successfully for key:", customKey);
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
