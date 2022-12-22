import classnames from 'classnames';
import * as React from 'react';
import * as s from './Button.css';
import * as T from './Button.types';

const Button: React.FunctionComponent<T.IButtonProps> = props => {
  const { children, className } = props;
  const classNames = classnames(s.root, className);

  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const { onClick } = props;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button className={classNames} onClick={handleClick} type="button">
      <span className={s.text}>{children}</span>
    </button>
  );
};

export default Button;
