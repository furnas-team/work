import React from 'react';
import {any, string, func} from 'prop-types';
import classNames from 'classnames';
import './button.scss';

Button.propTypes = {
  children: any,
  className: string,
  onClick: func
};

export function Button({children, className, onClick}) {

  return (
    <button className={classNames('button', className)}
            onClick={onClick}>
      {children}
    </button>
  );
}
