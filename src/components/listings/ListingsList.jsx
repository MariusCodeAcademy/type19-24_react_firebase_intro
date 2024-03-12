import SingleListing from './SingleListing';

// importuoti listingsDb ir sukti cikla per ji i sugeneruoti

// grid pavidalu responsive 3 columu grid

const ListingsList = ({ list, user, onDelete }) => {
  return (
    <div>
      <h2 className='text-2xl'>ListingsList</h2>

      <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {list.map((lObj) => (
          <SingleListing onDelete={onDelete} key={lObj.id} item={lObj} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default ListingsList;
