addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === "POST") {
    const formData = await request.formData();
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    // Mock response (or forward to Google Apps Script as needed)
    return new Response(JSON.stringify({ status: "success", data }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } else {
    return new Response("Method Not Allowed", { status: 405 });
  }
}
