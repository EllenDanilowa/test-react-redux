import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  ArrowDown,
  ArrowUp
} from './accordion.styled';

const Accordion = ({title, children}) => {
  const [opened, setOpened] = useState(false);

  const open = () => {
    setOpened(!opened);
  };

  return (
    <div>
      <Label onClick={open}>
        {title}
        {opened ? <ArrowUp/> : <ArrowDown/>}
      </Label>
      {opened && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default Accordion;
