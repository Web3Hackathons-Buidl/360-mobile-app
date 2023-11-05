import DataFetching from "@/components/DataFetching";
import handler from "../api/whoami.js";

export default async function DecommasData() {
  // const data = await getData();
  return (
    <div>
      <DataFetching />
    </div>
  );
}

// export default Data;
