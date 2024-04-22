import React from 'react';
import './FileUploader.css';

function FileUploader({ label, onChange }) {
  return (
    <div>
      <h2 className="h2_FU">{label}</h2>
      <p className='p_FU'>Selecciona archivo pdf</p>
      <input type="file" onChange={onChange} />
    </div>
  );
}

export default FileUploader;
