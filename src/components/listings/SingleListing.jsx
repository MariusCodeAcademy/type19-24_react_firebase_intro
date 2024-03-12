import React from 'react';
import { Link } from 'react-router-dom';

// atvaizduoti visa objeko info

/*
const item = {
    id: 1,
    title: 'Ipad pro',
    body: 'Labai geras imkit',
    imgUrl: '',
    price: 199.99,
    isArichived: false,
    useriUid: 123,
  },
*/

const SingleListing = ({ item, user, onDelete }) => {
  // console.log('user.email ===', user.email);

  const userIsOwner = item.userUid === user.uid;

  return (
    <li className={`border  ${userIsOwner ? 'border-black border-2' : ''}`}>
      <img className='h-56 object-cover w-full' src={`/img/${item.imgUrl}`} alt={item.title} />
      <div className={`p-5 ${userIsOwner ? 'bg-slate-300 ' : ''}`}>
        <h3 className='font-semibold text-lg'>{item.title}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <p>userId: {item.userUid}</p>
        <p>add id: {item.id}</p>
        {/* rodyti button tik savininkui */}
        {userIsOwner && (
          <button
            onClick={() => onDelete(item.id)}
            className='border-[1px] px-3 py-1 bg-red-400 rounded-lg'>
            Delete
          </button>
        )}
        <Link to={'/'}>
          <button className='border-[1px] px-3 py-1 bg-slate-400 rounded-lg'>read more</button>
        </Link>
      </div>
    </li>
  );
};

export default SingleListing;
