import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export function Button({ changePage }) {
  return (
    <button className={css.Button} onClick={changePage}>
      Load more
    </button>
  );
}

Button.propTypes = {
  chanmgePage: PropTypes.func.isRequired,
};
