import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '@/helpers';

// const rotate = keyframes`
//   0% {
//     transform: translate(-50%, -50%) rotateZ(0deg);
//   }
//   100% {
//     transform: translate(-50%, -50%) rotateZ(360deg);
//   }
// `;

// const rotateccw = keyframes`
//   0% {
//     transform: translate(-50%, -50%) rotate(0deg);
//   }
//   100% {
//     transform: translate(-50%, -50%) rotate(-360deg);
//   }
// `;

interface LoaderProps {
  size: number;
  colorLine1?: string;
  colorLine2?: string;
}

const spin = keyframes`
  0%,
  100% {
    box-shadow: 0.2em 0px 0 0px currentcolor;
  }
  12% {
    box-shadow: 0.2em 0.2em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 0.2em 0 0px currentcolor;
  }
  37% {
    box-shadow: -0.2em 0.2em 0 0 currentcolor;
  }
  50% {
    box-shadow: -0.2em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -0.2em -0.2em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0px -0.2em 0 0 currentcolor;
  }
  87% {
    box-shadow: 0.2em -0.2em 0 0 currentcolor;
  }
`;

const StyledLoader = styled.div<{
  size: number;
  colorLine1: string;
  colorLine2: string;
}>`
  transform: rotateZ(45deg);
  perspective: 1000px;
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ colorLine1 }) => colors[colorLine1]};

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s ${spin} linear infinite;
  }

  &::after {
    color: ${({ colorLine2 }) => colors[colorLine2]};
    transform: rotateY(70deg);
    animation-delay: 0.4s;
  }
`;

export const Loader: FC<LoaderProps> = (props): JSX.Element => {
  const { size, colorLine1 = 'blue400', colorLine2 = 'black' } = props;

  return (
    <StyledLoader size={size} colorLine1={colorLine1} colorLine2={colorLine2} />
  );
};
