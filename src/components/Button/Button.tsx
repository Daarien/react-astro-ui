import React from 'react';
import styled from 'astroturf';
import { darken } from 'polished';
import { colorMain } from '../const';
import BaseButton, { BaseButtonProps } from './BaseButton';

export interface ButtonProps extends BaseButtonProps {
    primary?: boolean;
    variant?: 'contained' | 'outlined';
}

const StyledButton = styled(BaseButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 4px;
    padding: 7px 15px;

    &.primary {
        font-size: 16px;
    }
    &.variant-contained {
        color: white;
        background-color: ${colorMain};
        border-color: ${colorMain};
        &:hover {
            background-color: ${darken('10%', colorMain)};
        }
    }
    &.variant-outlined {
        color: ${colorMain};
        background-color: white;
        border-color: ${colorMain};
        &:hover {
            color: white;
            background-color: ${colorMain};
        }
    }
`;

export default function Button(props: ButtonProps) {
    const { children, primary, variant, ...otherProps } = props;
    return <StyledButton {...otherProps}>{children}</StyledButton>;
}
