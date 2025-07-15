import React from 'react';

function ListingList({ listings }) {
  return (
    <ul>
      {listings.map((l) => (
        <li key={l.id}>
          <strong>{l.title}</strong><br />
          {l.address}, {l.location}<br />
          Contact: {l.ownerName} ({l.phone})
        </li>
      ))}
    </ul>
  );
}

export default ListingList;
