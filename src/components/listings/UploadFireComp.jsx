import { useState } from 'react';

const UploadFireComp = () => {
  const [files, setFiles] = useState(null);

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
