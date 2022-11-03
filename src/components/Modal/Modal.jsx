import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.closeModal);
  }

  render() {
    return (
      <div onClick={this.props.closeModal} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.src} alt="amazing shot" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
