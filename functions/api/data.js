export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Extract query parameters
  const sheet = url.searchParams.get("sheet");
  const limit = url.searchParams.get("limit");
  const sortByDate = url.searchParams.get("sortByDate");

  // Define the Google Apps Script URL
  const GOOGLE_SHEET_API_URL =
    "https://script.google.com/macros/s/AKfycbyDPw2mF4sldz83pXI5948I7oJ3a0YQVsZt2c1MbWN1P_Ig1CtsTdlE3YoZcVGzt_I/exec";

  // Construct URL with query parameters
  const apiUrl = new URL(GOOGLE_SHEET_API_URL);
  if (sheet) apiUrl.searchParams.append("sheet", sheet);
  if (limit) apiUrl.searchParams.append("limit", limit);
  if (sortByDate) apiUrl.searchParams.append("sortByDate", sortByDate);

  try {
    // Fetch data from Google Apps Script API
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script API error: ${response.status}`);
    }

    const data = await response.json();

    // Return the response with CORS headers
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
