import React from 'react';

import { RotatingSquare } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
  return (
    <RotatingSquare
      height="35"
      width="35"
      color="#4d4fa9"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      visible={true}
    />
  );
}
