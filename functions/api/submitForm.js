export async function onRequestPost(context) {
  const { request } = context;

  try {
    // Parse incoming form data
    const formData = await request.formData();
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Return the form data as JSON
    return new Response(JSON.stringify({ status: "success", data }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      status: 200,
    });
  } catch (error) {
    // Return an error response
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
