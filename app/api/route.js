

async function getData() {
    const res = await fetch('https://datalayer.decommas.net/datalayer/api/v1/tokens/{address}?api-key=e176f1b01d4b4b212e45c3285aea71416c765768')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
   
    return <main></main>
  }