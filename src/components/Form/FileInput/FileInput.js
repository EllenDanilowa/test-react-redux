import React from 'react';
import PropTypes from 'prop-types';
import {FieldWrapper, HiddenInput} from '../Form.styled';
import { Icon, Label } from './FileInput.styled';
import uploadIcon from './assets/upload.svg';

const FileInput = ({name, title, refFunc, accept}) => {


  return (
    <div>
      <FieldWrapper>
        <Label htmlFor={name}>
          <HiddenInput
            id={name}
            name={name}
            accept={accept}
            ref={refFunc}
            type="file"/>
            <Icon src={uploadIcon} alt="Upload a file"/>
          {title}
        </Label>
      </FieldWrapper>
    </div>

  );
};

FileInput.propTypes = {
  accept: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  refFunc: PropTypes.func.isRequired,
  watcher: PropTypes.object
};

export default FileInput;
