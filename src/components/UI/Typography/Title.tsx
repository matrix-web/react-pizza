import { createElement, FC } from 'react';
import styled, { css, CSSProperties } from 'styled-components';
import { media } from '@/helpers';
import { Weight, IThemes } from '@/helpers/interfaces';
import { colors } from '@/helpers';

type Child = JSX.Element | string;

interface ITitle {
  children: Child | Child[];
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: Weight;
  color?: string;
  className?: string;
  style?: CSSProperties;
  transform?: 'lowercase' | 'uppercase' | 'initial';
}

interface IStyledTitle {
  color: string;
  weight: Weight;
  className?: string;
  children: Child | Child[];
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  transform?: 'lowercase' | 'uppercase' | 'initial';
}

export const themes: IThemes = {
  h1: {
    mobile: {
      fontSize: '28px',
      lineHeight: '32px',
    },
    desktop: {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },
  h2: {
    mobile: {
      fontSize: '24px',
      lineHeight: '26px',
    },
    desktop: {
      fontSize: '28px',
      lineHeight: '30px',
    },
  },
  h3: {
    mobile: {
      fontSize: '22px',
      lineHeight: '24px',
    },
    desktop: {
      fontSize: '24px',
      lineHeight: '26px',
    },
  },
  h4: {
    mobile: {
      fontSize: '20px',
      lineHeight: '28px',
    },
    desktop: {
      fontSize: '22px',
      lineHeight: '24px',
    },
  },
  h5: {
    mobile: {
      fontSize: '18px',
      lineHeight: '22px',
    },
    desktop: {
      fontSize: '20px',
      lineHeight: '28px',
    },
  },
  h6: {
    mobile: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    desktop: {
      fontSize: '18px',
      lineHeight: '22px',
    },
  },
};

const TitleWithTag = (props: ITitle) =>
  createElement(props.tag, { ...props, tag: null }, props.children);

const StyledTitle = styled((props: IStyledTitle) =>
  TitleWithTag(props),
)<ITitle>`
  font-family: var(--font-brand);
  font-weight: ${(props) => props.weight};
  color: ${(props) => colors[props.color]};
  font-size: ${(props) => props.theme.mobile.fontSize};
  line-height: ${(props) => props.theme.mobile.lineHeight};
  text-transform: ${(props) => props.transform};

  ${(props) =>
    props.theme.desktop &&
    css`
      ${media.desktop} {
        font-size: ${props.theme.desktop.fontSize};
        line-height: ${props.theme.desktop.lineHeight};
      }
    `}
`;

export const Title: FC<ITitle> = (props): JSX.Element => {
  const {
    children,
    tag,
    weight = 700,
    color = 'black',
    className = '',
    transform = 'initial',
    style,
  } = props;

  return (
    <StyledTitle
      className={className}
      theme={themes[tag]}
      tag={tag}
      color={color}
      style={style}
      transform={transform}
      weight={weight}>
      {children}
    </StyledTitle>
  );
};
