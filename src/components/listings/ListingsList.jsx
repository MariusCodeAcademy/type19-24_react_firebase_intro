import React, { useEffect, useState } from 'react';
import SingleListing from './SingleListing';
import { listingsDb } from '../../db/listingsDb';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { data } from 'autoprefixer';

// importuoti listingsDb ir sukti cikla per ji i sugeneruoti

// grid pavidalu responsive 3 columu grid

const collectionName = 'listings';

const ListingsList = () => {
  const [listingsArr, setListingsArr] = useState([]);

  const getListingsFire = async () => {
    // TODO: pasidaryti pagalbine funkcija
    // fireBtoArr(querySnapshot) => masyva su id
    // const listingsFire = fireBtoArr(querySnapshot);

    const querySnapshot = await getDocs(collection(db, 'listings'));

    const listingsFire = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      // console.log(doc.data());
      listingsFire.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log(JSON.stringify(listingsFire, null, 2));
    setListingsArr(listingsFire);
  };

  useEffect(() => {
    // setListingsArr(listingsDb);

    // gauti duomenis is firebase firestore (listings)
    getListingsFire();
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
