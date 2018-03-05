import React from 'react';
import {any, string} from 'prop-types';
import classNames from 'classnames';
import './title.scss';

Title.propTypes = {
  children: any,
  className: string
};

export function Title({children, className}) {

  return (
    <div className={classNames('title', className)}>
      {children}
    </div>
  );
}
