const axios = require("axios");

module.exports = async (req, res) => {
  try {
    // Construct the URL with any parameters passed in the request
    const { sheet, limit, sortByDate } = req.query;
    const GOOGLE_SHEET_API_URL =
      "https://script.google.com/macros/s/AKfycbz8VvBY7QW4KGmDrHoZcMT3gpa9d4aXWaQ8521wsqerK_QRo7f1JQ74rGktv9CZWZSB/exec";

    // Forward query parameters to the Google Apps Script
    const response = await axios.get(GOOGLE_SHEET_API_URL, {
      params: {
        sheet,
        limit,
        sortByDate,
      },
    });

    // Send the data back to the client
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response.data));
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Failed to fetch data" }));
  }
};
