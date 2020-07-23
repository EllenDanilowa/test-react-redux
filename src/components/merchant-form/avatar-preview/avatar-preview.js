import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  PreviewWrapper,
  Image
} from './avatar-preview.styled';

const AvatarPreview = ({files, alt, defaultImageUrl}) => {
  const reader = new FileReader();
  const [preview, setPreview] = useState('');

  if (files && files.length) {
    reader.onload = (event) => {
      setPreview(event.target.result);
    };

    reader.readAsDataURL(files[0]);
  }

  return (
    <PreviewWrapper>
      {preview && (
        <Image src={preview} alt={alt}/>
      )}
      {(!preview && defaultImageUrl) && (
        <Image src={defaultImageUrl} alt={alt}/>
      )}
    </PreviewWrapper>
  );
};

AvatarPreview.propTypes = {
  alt: PropTypes.string.isRequired,
  files: PropTypes.object.isRequired,
  defaultImageUrl: PropTypes.string
};

AvatarPreview.propTypes = {
};

export default AvatarPreview;
