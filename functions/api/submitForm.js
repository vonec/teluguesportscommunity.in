export async function onRequestPost(context) {
  const { request } = context;

  try {
    // Parse incoming form data
    const formData = await request.formData();
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const now = new Date();
    const formattedTimestamp = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(
      now.getHours()
    ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(
      now.getSeconds()
    ).padStart(2, "0")}`;
    data.timestamp = formattedTimestamp;

    // Get city and IP address from Cloudflare's data
    const geoData = request.cf;
    data.city = geoData.city || "N/A"; // Set to "N/A" if city is unavailable
    data.ip = request.headers.get("CF-Connecting-IP") || "N/A"; // Get IP address

    // Log the data being sent to Google Apps Script
    console.log("Data sent to Google Apps Script:", JSON.stringify(data));

    // Forward data to Google Apps Script
    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbwK6aUTVNjTo93pt89aRULriHCCT2r-oEGq4v7xKmHdhLQP-9zPGD5V8NVPvMDFSB7fbg/exec"; // Replace with your Apps Script URL
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    });

    // Parse response from Google Apps Script
    const responseData = await response.json();
    console.log(
      "Response from Google Apps Script:",
      JSON.stringify(responseData)
    );

    // Return response to client
    return new Response(JSON.stringify(responseData), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      status: response.status,
    });
  } catch (error) {
    console.log("Error:", error.message);
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        status: 500,
      }
    );
  }
}
