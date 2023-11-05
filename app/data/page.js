// "use client";
import DataFetching from "@/components/DataFetching";
import handler from "../api/whoami";

export default async function DecommasData() {
  // const data = await getData();
  return (
    <div>
      <DataFetching />
    </div>
  );
}

// export default Data;
