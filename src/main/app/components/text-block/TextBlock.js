import React from 'react';
import classNames from 'classnames';
import {any, string} from 'prop-types';
import './text-block.scss';

export const TextBlockTextAlign = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right'
};

TextBlock.propTypes = {
  children: any,
  classNames: string,
  textAlign: string
};

TextBlock.defaultProps = {
  textAlign: TextBlockTextAlign.LEFT
};

export function TextBlock({children, className, textAlign}) {
  return (
    <div className={classNames('text-block', {
      'text-block_text-align-right': textAlign === TextBlockTextAlign.RIGHT,
      'text-block_text-align-left': textAlign === TextBlockTextAlign.LEFT,
      'text-block_text-align-center': textAlign === TextBlockTextAlign.CENTER,
    }, className)}>
      {children}
    </div>
  );
}
