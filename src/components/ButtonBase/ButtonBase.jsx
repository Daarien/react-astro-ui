import React from 'react';
import styled, { css } from 'astroturf';
import clsx from 'clsx';

// const BaseButton: StyledComponent<'button'> = styled.button`
// const BaseButton = styled.button`
// cursor: pointer;
// font-size: 0.875rem;
// transition: all 150ms ease-in-out;
// `;

const classes = css`
  .buttonBase {
    cursor: pointer;
    font-size: 0.875rem;
    transition: all 150ms ease-in-out;
  }
`;

// type ButtonBaseProps = ComponentProps<'button'>;

const ButtonBase = ({ children, className }) => {
  return <button className={clsx(classes.buttonBase, className)}>{children}</button>;
};

export default ButtonBase;
