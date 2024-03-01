import ListingsList from '../components/listings/ListingsList';

const ListsPage = () => {
  return (
    <div className='container mx-auto px-4 '>
      <h1 className='text-3xl font-bold underline my-5'>Skelbimu lenta</h1>
      <p className=''>Welcome to out store</p>
      {/* ikelti Listings list */}
      <ListingsList />
    </div>
  );
};

export default ListsPage;
