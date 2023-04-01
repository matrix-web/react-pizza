import { FC, ReactNode } from 'react';
import styled, { CSSProperties, css } from 'styled-components';
import { colors } from '@/helpers';
import { Loader } from '@/components/UI';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  isCircle?: boolean;
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary';
  isOutline?: boolean;
  isLoading?: boolean;
  isLink?: boolean;
  onClick?: () => void;
}

type ButtonStyle = Pick<
  ButtonProps,
  'isOutline' | 'isCircle' | 'variant' | 'isLink'
>;

const StyledButton = styled.button<ButtonStyle>`
  display: flex;
  align-items: center;
  gap: 3px;
  border-radius: 30px;
  padding: 10px 20px;
  font-weight: 700;
  font-family: var(--font-brand);
  font-size: 16px;
  line-height: 1.18;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: background-color var(--duration) ease-in-out,
    border-color var(--duration) ease-in-out;
  border: 1px solid transparent;
  user-select: none;

  i,
  span,
  path,
  svg {
    transition: all $duration ease-in-out;
  }

  ${({ variant, isOutline, isLink }) =>
    variant === 'primary' &&
    !isOutline &&
    !isLink &&
    css`
      background-color: ${colors.orange400};
      color: ${colors.white};

      &:not(:disalbed):hover {
        background-color: ${colors.orange500};
      }

      &:not(:disabled):active {
        background-color: ${colors.orange600};
        transform: translateY(1px);
      }
    `}

  &:not(:disabled):active {
    transform: translateY(1px);
  }

  ${({ isOutline, variant }) =>
    isOutline &&
    css`
      ${variant === 'primary' &&
      css`
        background-color: ${colors.white};
        border-color: ${colors.orange400};

        &,
        span {
          color: ${colors.orange400};
        }

        svg {
          fill: ${colors.orange400};
        }

        &:not(:disabled):hover {
          background-color: ${colors.orange400};
          border-color: ${colors.orange400};

          &,
          span {
            color: ${colors.white};
          }

          svg {
            fill: ${colors.white};
          }
        }

        &:not(:disabled):active {
          background-color: ${colors.orange500};
          border-color: ${colors.orange500};
        }
      `}

      ${variant === 'secondary' &&
      css`
        border-color: ${colors.gray400};

        &,
        span {
          color: ${colors.gray400};
        }

        svg {
          fill: ${colors.gray400};
        }

        &:not(:disabled):hover {
          background-color: ${colors.black};
          border-color: ${colors.black};

          &,
          span {
            color: ${colors.white};
          }

          svg {
            fill: ${colors.white};
          }
        }
      `}
    `};

  ${({ isCircle }) =>
    isCircle &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      min-width: 32px;
      padding: 0;
      border-width: 2px;
    `};

  ${({ isLink }) =>
    isLink &&
    css`
      border: none;
      background-color: transparent;
      color: ${colors.gray300};

      &:not(:disabled):hover {
        color: ${colors.gray600};

        svg {
          stroke: ${colors.gray600};
        }
      }
    `};

  &:disabled {
    border-color: ${colors.gray300};
    color: ${colors.gray300};
    cursor: not-allowed;

    svg {
      stroke: ${colors.gray300};
      fill: ${colors.gray300};
    }
  }
`;

export const Button: FC<ButtonProps> = (props): JSX.Element => {
  const {
    children,
    className,
    style,
    isDisabled = false,
    isCircle = false,
    isOutline = false,
    isLink = false,
    isLoading = false,
    variant = 'primary',
    onClick,
  } = props;

  return (
    <StyledButton
      className={className}
      isOutline={isOutline}
      isCircle={isCircle}
      style={style}
      disabled={isDisabled}
      isLink={isLink}
      variant={variant}
      onClick={onClick}>
      {isLoading ? <Loader size={24} /> : <>{children}</>}
    </StyledButton>
  );
};
