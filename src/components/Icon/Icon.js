import React from 'react';
import styled from 'astroturf';

import { getIconSize, getIconPadding } from './utils';

const files = require.context('./svg', false, /.*\.svg$/);
files.keys().forEach(files);

const IconContainer = styled.div`
  --icon-default-color: rgb(178, 178, 178);
  --icon-inverted-color: #fff;

  display: inline-flex;
  cursor: inherit;
  user-select: none;
  vertical-align: middle;
  background-color: transparent;
  flex-flow: row;
  align-content: center;
  align-items: center;
  justify-content: center;

  &.inverted {
    box-sizing: border-box;
    cursor: inherit;
    border-radius: 50%;
    background-color: var(--icon-default-color);
    color: var(--icon-inverted-color) !important;
  }

  &.clickable {
    cursor: pointer;
    transition: opacity var(--transition-duration) ease-in-out;

    &:hover {
      opacity: 0.9;
    }
  }

  &.intent-default {
    color: var(--icon-default-color);

    &.inverted {
      background-color: var(--icon-default-color);
    }
  }

  &.intent-primary {
    color: var(--color-primary);

    &.inverted {
      background-color: var(--color-primary);
    }
  }

  &.intent-success {
    color: var(--color-success);

    &.inverted {
      background-color: var(--color-success);
    }
  }

  &.intent-danger {
    color: var(--color-danger);

    &.inverted {
      background-color: var(--color-danger);
    }
  }

  &.intent-info {
    color: var(--color-info);

    &.inverted {
      background-color: var(--color-info);
    }
  }

  &.intent-warning {
    color: var(--color-warning);

    &.inverted {
      background-color: var(--color-warning);
    }
  }
`;

const IconSvg = styled('svg')`
  display: block;
  fill: currentColor;
`;

export const Icon = (props, ref) => {
  const {
    intent = 'default',
    inverted = false,
    onClick,
    glyph,
    id,
    size = 'normal',
    title,
    ariaLabel,
    width = getIconSize(size),
    height = width,
    className,
  } = props;
  const style = {
    width,
    height,
    padding: getIconPadding(width, inverted),
  };

  return (
    <IconContainer
      id={id}
      ref={ref}
      className={className}
      onClick={onClick}
      style={style}
      aria-label={ariaLabel || glyph}
      title={title}
      inverted={inverted}
      intent={intent}
      clickable={onClick !== undefined}
    >
      <IconSvg width="100%" height="100%" shapeRendering="auto">
        <use xlinkHref={`#${glyph}`} />
      </IconSvg>
    </IconContainer>
  );
};
