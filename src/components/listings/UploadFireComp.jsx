import { useState } from 'react';
import { storage } from '../../firebase/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import Button from '../UI/Button';

const UploadFireComp = () => {
  const [files, setFiles] = useState(null);

  // 3 upload
  // sukurti nuoroda i isaugojimo vieta
  const imagesRef = ref(storage, 'img/pirmas.jpg');

  const uploadFireSimple = () => {
    // 'file' comes from the Blob or File API
    uploadBytes(imagesRef, files[0]).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      console.log('snapshot ===', snapshot);
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
