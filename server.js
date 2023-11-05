const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors"); // Import the cors package
const DataFetching = require("./components/DataFetching"); // Assuming your DataFetching component is in the same directory

const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.get("/api/tokens", async (req, res) => {
  try {
    const response = await fetch(
      "https://datalayer.decommas.net/datalayer/api/v1/tokens/0x81D9069957Bfbd6fb29C3b0686Ce78397FF3E009/api-key=e176f1b01d4b4b212e45c3285aea71416c765768"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
