import React from 'react';
import './input.scss';
import {string, func} from 'prop-types';
import classNames from 'classnames';

Input.propTypes = {
  className: string,
  onChange: func,
  value: string,
  placeholder: string
};

export function Input({className, value, placeholder, onChange}) {

  return (
    <input className={classNames('input', className)}
           placeholder={placeholder}
           onChange={onChange}
           value={value}/>
  );

}
