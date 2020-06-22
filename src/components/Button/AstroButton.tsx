import React, { FC } from 'react';
import styled, { StyledComponent } from 'astroturf';
import { BaseButtonProps } from './BaseButton';

export interface AstroButtonProps extends BaseButtonProps {
    variant?: 'contained' | 'outlined';
}

function AstroButton(props: AstroButtonProps) {
    const { children, variant, ...otherProps } = props;
    return <button {...otherProps}>{children}</button>;
}

const StyledAstroButton: StyledComponent<FC<AstroButtonProps>> = styled(AstroButton)`
    color: white;
    background-color: forestgreen;
    border: 1px solid forestgreen;
    border-radius: 4px;
    min-width: 64px;
    padding: 4px 8px;
    font-size: 14px;
    cursor: pointer;
    outline: none;
`;

export default StyledAstroButton;
