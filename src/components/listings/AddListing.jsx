//

import { useFormik } from 'formik';
import SmartInput from '../UI/SmartInput';

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

  console.log('formik.values ===', formik.values);

  return (
    <div className='border p-5 my-5'>
      <h2 className='text-2xl'>Create Add</h2>
      <form className='mt-5'>
        <SmartInput name={'title'} formik={formik} />
        <SmartInput name={'imgUrl'} formik={formik} />
        <SmartInput name={'price'} type='number' formik={formik} />
        <SmartInput name={'body'} type='textarea' formik={formik} />
        <button className='border-[1px] px-3 py-1 bg-slate-300 rounded-lg' type='submit'>
          Create
        </button>
      </form>
    </div>
  );
};

export default AddListing;
