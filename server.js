const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors"); // Import the cors package
const DataFetching = require("./components/DataFetching"); // Assuming your DataFetching component is in the same directory

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/api/tokens", async (req, res) => {
  try {
    const response = await fetch(
      "https://datalayer.decommas.net/datalayer/api/v1/tokens/0x5C0b2E97109a6aee0F40D63B5d70F6e9DD137240"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
