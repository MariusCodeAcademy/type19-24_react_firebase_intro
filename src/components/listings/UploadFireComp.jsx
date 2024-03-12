import { useState } from 'react';
import { storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Button from '../UI/Button';
import { v4 as genId } from 'uuid';

const UploadFireComp = () => {
  const [files, setFiles] = useState(null);

  // 3 upload
  // sukurti nuoroda i isaugojimo vieta
  // const imagesRef = ref(storage, 'img/pirmas.jpg');

  const uploadFireSimple = () => {
    // todo, leisti tik paveiklslelius
    const imagesRef = ref(storage, 'img/' + genId() + '.' + files[0].type.split('/')[1]);
    // 'file' comes from the Blob or File API
    uploadBytes(imagesRef, files[0]).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      // console.log('snapshot ===', snapshot);
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        // nuoroda i paveiksleli
        console.log('File available at', downloadURL);
      });
    });
  };

  console.log('files ===', files);

  const handleAddFile = (e) => {
    console.log(' e.target.files ===', e.target.files);
    setFiles(e.target.files);
  };

  return (
    <div>
      <h3>Upload to Firebase</h3>
      <input
        // value={files}
        onChange={handleAddFile}
        multiple={false}
        name='files'
        type='file'
        className='block mb-5'
      />
      <Button onClick={uploadFireSimple}>Upload</Button>
    </div>
  );
};

export default UploadFireComp;
