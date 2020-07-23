import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  ArrowDown,
  ArrowUp
} from './accordion.styled';

const Accordion = (props) => {
  const [opened, setOpened] = useState(false);

  const open = () => {
    setOpened(!opened);
  };

  return (
    <div>
      <Label onClick={open}>
        {props.title}
        {opened ? <ArrowUp/> : <ArrowDown/>}
      </Label>
      {opened && (
        <div>
          {props.children}
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
