import React from 'react';

// atvaizduoti visa objeko info

/*
{
    id: 1,
    title: 'Ipad pro',
    body: 'Labai geras imkit',
    imgUrl: '',
    price: 199.99,
    isArichived: false,
    useriUid: 123,
  },
*/

const SingleListing = ({ item }) => {
  return (
    <li className='border p-5'>
      <h3>{item.title}</h3>
      <img src='' alt='title' />
      <p>Price: </p>
      <p>userId: </p>
      <p>add id: </p>
    </li>
  );
};

export default SingleListing;
