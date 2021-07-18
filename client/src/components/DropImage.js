import React, { useCallback } from 'react';


const DropImage = (props) => {
  return (
    <div className="design-border mx-auto pt-5 pb-4">
      <img src="https://res.cloudinary.com/erenaspire7/image/upload/v1625095754/image_buer4q.svg" />

      <p className="caption pt-4">Drag & Drop your Image here</p>
    </div>
  );
};

export default DropImage;
