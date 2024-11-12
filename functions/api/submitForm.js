addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === "POST") {
    try {
      const formData = await request.formData();
      const data = {};
      formData.forEach((value, key) => (data[key] = value));

      // Log data received for debugging
      console.log("Data received:", JSON.stringify(data));

      // Send back a mock response to confirm data receipt
      return new Response(JSON.stringify({ status: "success", data }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      // Log error for debugging
      console.log("Error:", error.message);

      // Send back error response
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
  } else {
    return new Response("Method Not Allowed", { status: 405 });
  }
}
