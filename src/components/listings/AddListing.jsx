//

import { useFormik } from 'formik';
import SmartInput from '../UI/SmartInput';
import { useEffect } from 'react';
import { auth, db } from '../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';

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
      // createDocumentFire

      // atnaujinti sarasa
    },
  });

  console.log('formik.values ===', formik.values);

  useEffect(() => {
    const user = auth.currentUser;
    console.log('user ===', user);
    formik.setFieldValue('useriUid', user.uid || 0);
  }, []);

  const createDocumentFire = async (newListingObj) => {
    try {
      // const listCollecion = collection(db, 'listings')
      const docRef = await addDoc(collection(db, 'listings'), newListingObj);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className='border p-5 my-5'>
      <h2 className='text-2xl'>Create Add</h2>
      <form className='mt-5'>
        <SmartInput name={'title'} formik={formik} />
        <SmartInput name={'imgUrl'} formik={formik} />
        <SmartInput name={'price'} type='number' formik={formik} />
        <SmartInput name={'body'} type='textarea' formik={formik} />
        <SmartInput name={'useriUid'} formik={formik} disabled />

        <button className='border-[1px] px-3 py-1 bg-slate-300 rounded-lg' type='submit'>
          Create
        </button>
      </form>
    </div>
  );
};

export default AddListing;
