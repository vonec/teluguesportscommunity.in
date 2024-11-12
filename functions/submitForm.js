export async function onRequestPost(context) {
  try {
    const { request } = context;

    // Parse the incoming request body (assuming JSON format)
    const formData = await request.json();

    // Log the received form data (optional, for debugging)
    console.log("Form Data Received:", formData);

    // Prepare a success response with the submitted data
    return new Response(
      JSON.stringify({
        status: "success",
        message: "Form submitted successfully!",
        data: formData,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Handle CORS
        },
      }
    );
  } catch (error) {
    // Handle errors and send back an error message
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
