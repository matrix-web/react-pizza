import { FC, ReactNode } from 'react';
import styled, { css, CSSProperties } from 'styled-components';

interface ContentContainerProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode | ReactNode[];
  isCart?: boolean;
}

const StyledContentContainer = styled.div<{ isCart: boolean }>`
  max-width: 92%;
  margin: 0 auto;

  ${({ isCart }) =>
    isCart &&
    css`
      max-width: 820px;
      margin: 90px auto;
    `}
`;

export const ContentContainer: FC<ContentContainerProps> = (
  props,
): JSX.Element => {
  const { children, className, style, isCart = false } = props;

  return (
    <StyledContentContainer className={className} style={style} isCart={isCart}>
      {children}
    </StyledContentContainer>
  );
};
