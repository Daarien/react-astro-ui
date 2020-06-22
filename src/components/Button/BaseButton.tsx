import { ButtonHTMLAttributes } from 'react';
import styled, { StyledComponent } from 'astroturf';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const BaseButton: StyledComponent<'button'> = styled.button`
    cursor: pointer;
    font-size: 0.875rem;
    transition: all 150ms ease-in-out;
`;

export default BaseButton;
