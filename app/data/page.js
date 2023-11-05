import DataFetching from "@/components/DataFetching";
// const express = require("express");

// const app = express();
// const cors = require("cors"); // Import the cors package
// app.use(cors());

// async function getData() {
//   const res = await fetch(
//     "https://datalayer.decommas.net/datalayer/api/v1/tokens/{0x81D9069957Bfbd6fb29C3b0686Ce78397FF3E009}?api-key=e176f1b01d4b4b212e45c3285aea71416c765768"
//   );
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function DecommasData() {
  // const data = await getData();
  return (
    <div>
      {/* Other page content */}
      <DataFetching />
      {/* Other page content */}
    </div>
  );
}

// export default Data;
