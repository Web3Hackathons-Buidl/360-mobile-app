// "use client";
import DataFetching from '@/components/DataFetcher'
import handler from '../api/whoami'
import { useClient } from 'next/amp'

export default async function DecommasData() {
  // const data = await getData();
  useClient()
  return (
    <div>
      <DataFetching />
    </div>
  )
}

// export default Data;
