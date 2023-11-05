import React from "react";

async function getNFTsMetadata() {
  const res = await fetch("http://localhost:4000/NFTsMetadata.json");
  return res.json();
}

export default async function NFTsMetadataList() {
  const NFTsMetadata = await getNFTsMetadata();

  return (
    <div>
      {NFTsMetadata.map((metadata) => (
        <div key={metadata.token_id} className="card my-5">
          <h3>{metadata.name}</h3>
          <p>{metadata.body.slice(0, 200)}...</p>
          <div className={`pill`}>{metadata.priority} priority</div>
        </div>
      ))}
      {IoTicketSharp.length === 0 && (
        <p className="test-center">There are not open NFTs w/ Metadata</p>
      )}
    </div>
  );
}
