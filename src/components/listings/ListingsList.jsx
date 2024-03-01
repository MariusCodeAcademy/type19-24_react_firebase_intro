import React, { useEffect, useState } from 'react';
import SingleListing from './SingleListing';
import { listingsDb } from '../../db/listingsDb';

// importuoti listingsDb ir sukti cikla per ji i sugeneruoti

// grid pavidalu responsive 3 columu grid

const ListingsList = () => {
  const [listingsArr, setListingsArr] = useState([]);

  useEffect(() => {
    setListingsArr(listingsDb);

    // gauti duomenis is firebase firestore (listings)
  }, []);
  return (
    <div>
      <h2 className='text-2xl'>ListingsList</h2>

      <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {listingsArr.map((lObj) => (
          <SingleListing key={lObj.id} item={lObj} />
        ))}
      </ul>
    </div>
  );
};

export default ListingsList;
