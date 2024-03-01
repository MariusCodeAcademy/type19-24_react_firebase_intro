import React from 'react';
import SingleListing from './SingleListing';

// importuoti listingsDb ir sukti cikla per ji i sugeneruoti

// grid pavidalu responsive 3 columu grid

const ListingsList = () => {
  return (
    <div>
      ListingsList
      <SingleListing />
      <SingleListing />
      <SingleListing />
      <SingleListing />
      <SingleListing />
      <SingleListing />
    </div>
  );
};

export default ListingsList;
