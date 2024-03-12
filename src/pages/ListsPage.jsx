import { useEffect, useState } from 'react';
import AddListing from '../components/listings/AddListing';
import ListingsList from '../components/listings/ListingsList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import Button from '../components/UI/Button';

const ListsPage = () => {
  const [listingsArr, setListingsArr] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleNewListing = (newLObj) => {
    // naujas objektas
    console.log('newLObj ===', newLObj);
    setListingsArr([newLObj, ...listingsArr]);
  };

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
    // console.log(JSON.stringify(listingsFire, null, 2));
    setListingsArr(listingsFire);
  };

  useEffect(() => {
    // setListingsArr(listingsDb);
    // gauti duomenis is firebase firestore (listings)
    getListingsFire();
  }, []);
  return (
    <div className='container mx-auto px-4 '>
      <h1 className='text-3xl font-bold underline my-5'>Skelbimu lenta</h1>
      <p className=''>Welcome to out store</p>
      {/* ikelti Listings list */}
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide form' : 'Add Listing'}
      </Button>

      {showForm && <AddListing onNewListing={handleNewListing} />}
      <ListingsList list={listingsArr} />
    </div>
  );
};

export default ListsPage;
