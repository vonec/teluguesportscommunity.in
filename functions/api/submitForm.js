export async function onRequestPost(context) {
  const { request } = context;

  try {
    // Parse incoming form data
    const formData = await request.formData();
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Log the parsed data
    console.log("Parsed Form Data:", JSON.stringify(data));

    // Google Apps Script URL
    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbwBM38U3oP7CmOis0Wk6NRGRE8N5n00BhNoutMQyV6XVYDW9N2IsqLViJdai_RFwkjt9Q/exec"; // Replace with your actual Apps Script URL

    // Forward the data to Google Apps Script
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    });

    // Log the response status and headers
    console.log("Response Status:", response.status);
    console.log("Response Headers:", JSON.stringify([...response.headers]));

    // Parse the response from Google Apps Script
    const responseData = await response.json();

    // Log the response data from Google Apps Script
    console.log(
      "Response Data from Google Apps Script:",
      JSON.stringify(responseData)
    );

    // Return the response back to the client
    return new Response(JSON.stringify(responseData), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      status: response.status,
    });
  } catch (error) {
    // Log the error message
    console.log("Error:", error.message);

    // Return an error response to the client
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
