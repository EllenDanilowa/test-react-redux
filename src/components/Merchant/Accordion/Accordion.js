import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  ArrowDown,
  ArrowUp
} from './Accordion.styled';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    };

    this.open = this.open.bind(this);
  }

  open() {
    const opened = !this.state.opened;
    this.setState({opened});
  }

  render() {
    return (
      <Fragment>
        <Label onClick={this.open}>
          {this.props.title}
          {this.state.opened ? <ArrowUp/> : <ArrowDown/>}
        </Label>
        {this.state.opened && (
          <div>
            {this.props.children}
          </div>
        )}
      </Fragment>
      );
  }
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default Accordion;
