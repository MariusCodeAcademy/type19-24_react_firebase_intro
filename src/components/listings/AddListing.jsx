//

import { useFormik } from 'formik';

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

const AddListing = () => {
  const formik = useFormik({
    initialValues: {
      title: 'Ipad pro',
      body: 'Labai geras imkit',
      imgUrl: '',
      price: 199.99,
      isArichived: false,
      useriUid: 123,
    },
    onSubmit: (finalValues) => {
      console.log('finalValues ===', finalValues);
    },
  });
  return (
    <div className='border p-5 my-5'>
      <h2 className='text-2xl'>Create Add</h2>
      <form></form>
    </div>
  );
};

export default AddListing;
