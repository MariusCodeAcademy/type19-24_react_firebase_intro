import { useState } from 'react';
import { storage } from '../../firebase/firebase';
import { ref } from 'firebase/storage';

const UploadFireComp = () => {
  const [files, setFiles] = useState(null);

  // 3 upload
  // sukurti nuoroda i isaugojimo vieta
  const imagesRef = ref(storage, 'img');

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
        multiple
        name='files'
        type='file'
        className='block mb-5'
      />
    </div>
  );
};

export default UploadFireComp;
