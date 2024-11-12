export async function onRequestPost(context) {
  const { request } = context;

  try {
    // Parse the incoming request body
    const formData = await request.formData();
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    // Mock response to confirm the API route works
    return new Response(JSON.stringify({ status: "success", data }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
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
