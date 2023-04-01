import { FC, ReactNode, createElement } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { colors } from '@/helpers';
import { Weight } from '@/helpers/interfaces';

type Child = ReactNode;

interface IParagraph {
  tag?: string;
  color?: string;
  weight?: Weight;
  children: Child | Child[];
  className?: string;
  size?: 12 | 14 | 16 | 18 | 20 | number;
  style?: CSSProperties;
}

interface IStyledParagraph {
  tag: string;
  color: string;
  weight: Weight;
  children: Child | Child[];
  className?: string;
}

const ParagraphWithTag = (props: IStyledParagraph) =>
  createElement(props.tag, props, props.children);

const StyledParagraph = styled((props: IStyledParagraph) =>
  ParagraphWithTag(props),
)<IParagraph>`
  font-family: var(--font-brand);
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => colors[color]};
  transition: var(--duration);
  font-size: ${(props) => props.size}px;
  line-height: 1.5;
`;

export const Paragraph: FC<IParagraph> = (props): JSX.Element => {
  const {
    children,
    size = 16,
    weight = 400,
    tag = 'p',
    color = 'black',
    className,
    style,
  } = props;

  return (
    <StyledParagraph
      className={className}
      size={size}
      tag={tag}
      color={color}
      weight={weight}
      style={style}>
      {children}
    </StyledParagraph>
  );
};
