export async function onRequestPost(context) {
  const { request } = context;

  try {
    // Parse the incoming request body
    const formData = await request.formData();
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    console.log("Data sent to Google Apps Script:", data);

    // URL of the Google Apps Script web app
    const googleScriptUrl =
      "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

    // Forward the data to Google Apps Script using a POST request
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    });

    const responseData = await response.json();
    console.log("Response from Google Apps Script:", responseData);

    // Return the response back to the client
    return new Response(JSON.stringify(responseData), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Handle CORS
      },
    });
  } catch (error) {
    console.log("Error:", error.message);
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Handle CORS
        },
        status: 500,
      }
    );
  }
}
