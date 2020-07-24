import React from 'react';
import PropTypes from 'prop-types';
import {FieldWrapper, HiddenInput} from '../form.styled';
import {Icon, Label} from './file-input.styled';
import uploadIcon from './assets/upload.svg';

const FileInput = ({name, title, refFunc, alt, ...props}) => (
  <FieldWrapper>
    <Label htmlFor={name}>
      <HiddenInput
        id={name}
        name={name}
        ref={refFunc}
        {...props}
        type="file"/>
      <Icon src={uploadIcon} alt={alt}/>
      {title}
    </Label>
  </FieldWrapper>
);

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  refFunc: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired
};

FileInput.defaultProps = {
  alt: 'Upload a file'
}

export default FileInput;
