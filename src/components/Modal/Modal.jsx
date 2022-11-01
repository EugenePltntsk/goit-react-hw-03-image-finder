import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from "./Modal.module.css"

export class Modal extends Component  {
  escClose = (e) =>  {
    if(e.key === "Escape") {
      this.props.closeModal();
    }



  }


  componentDidMount () {
    document.addEventListener("keydown", this.escClose)
  }


  componentWillUnmount() {
document.removeEventListener("keydown", this.escClose)
  }

 render() {

  return (
    <div onClick={this.props.closeModal} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={this.props.src} alt="image" />
      </div>
    </div>
  );
 }
 
}

Modal.propTypes = {};
