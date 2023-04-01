import { FC, useState, FormEvent } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '@/components/UI';
import { colors } from '@/helpers';

export interface IInputProps {
  value: string | number;
  onChange: (value: string) => void;
  name?: string;
  error?: string;
  type: 'text' | 'password';
  placeholder?: string;
  label?: string;
  isNumeric?: boolean;
  isDisabled?: boolean;
  isTextArea?: boolean;
  isResizable?: boolean;
  isSearch?: boolean;
}

interface StyledInputProps {
  isError: boolean;
  isResizable: boolean;
  isSearch: boolean;
  isPassword: boolean;
}

const StyledInputWrapper = styled.div<{ isError: boolean }>`
  position: relative;
  background-color: ${colors.white};
  font-family: var(--font-brand);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding-bottom: ${({ isError }) => (isError ? '15px' : '0px')};
`;

const StyledLabel = styled.label`
  position: relative;
  letter-spacing: 0.005em;
  color: ${colors.black};
`;

const StyledLabelText = styled.span`
  display: inline-block;
  margin-bottom: 4px;
`;

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  outline: none;
  border: none;
  padding: 7px 12px;
  border: 1px solid
    ${({ isError }) => (isError ? colors.red400 : colors.gray300)};
  border-radius: 10px;
  font-family: var(--font-brand);
  font-size: 16px;
  line-height: 24px;
  color: ${colors.black};
  transition: var(--duration);
  resize: ${({ isResizable }) => (isResizable ? 'resize' : 'none')};

  ${({ isSearch }) =>
    isSearch &&
    css`
      padding: 7px 12px 7px 35px;
    `};

  ${({ isPassword }) =>
    isPassword &&
    css`
      padding: 7px 35px 7px 12px;
    `};

  &:disabled {
    color: ${colors.gray300};
  }

  &:focus {
    border-color: ${colors.orange400};
  }

  &::placeholder {
    color: ${colors.gray200};
  }
`;

const StyledError = styled.span`
  position: abolute;
  left: 0;
  bottom: -3px;
  font-size: 12px;
  line-height: 20px;
  color: ${colors.error400};
`;

const StyledIcon = styled(Icon)<{ isLabel?: boolean; isSearch?: boolean }>`
  position: absolute;
  top: 50%;
  transform: ${({ isLabel }) =>
    isLabel ? `translateY(10%)` : `translateY(-50%)`};

  ${({ isSearch }) =>
    isSearch
      ? css`
          left: 10px;
        `
      : css`
          right: 10px;
        `}
`;

export const Input: FC<IInputProps> = (props): JSX.Element => {
  const {
    value,
    onChange,
    error = '',
    name = '',
    type = 'text',
    label = '',
    placeholder = '',
    isNumeric = false,
    isDisabled = false,
    isTextArea = false,
    isResizable = false,
    isSearch = false,
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const validateNumericInput = (value: string): string => {
    return value.replace(/\D/g, '').replace(/^0+(?!$)/, '');
  };

  const handleInputChange = (event: FormEvent<HTMLInputElement>): void => {
    if (!onChange) return;

    onChange(
      isNumeric
        ? validateNumericInput(event.currentTarget.value)
        : event.currentTarget.value,
    );
  };

  return (
    <StyledInputWrapper isError={!!error}>
      <StyledLabel>
        {label && <StyledLabelText>{label}</StyledLabelText>}
        <StyledInput
          value={value}
          isError={!!error}
          isSearch={isSearch}
          isPassword={type === 'password'}
          as={isTextArea ? 'textarea' : 'input'}
          type={isPasswordVisible ? 'text' : type}
          name={name}
          placeholder={placeholder}
          disabled={isDisabled}
          isResizable={isResizable}
          onChange={handleInputChange}
        />
      </StyledLabel>
      {(isSearch || type === 'password') && (
        <StyledIcon
          name={isSearch ? 'search' : isPasswordVisible ? 'eye' : 'eye-closed'}
          color={isSearch ? 'gray200' : 'gray500'}
          size={24}
          isSearch={isSearch}
          colorProperty="fill"
          isClickable={type === 'password'}
          onClick={() => setIsPasswordVisible((prev) => !prev)}
        />
      )}
      {error ? <StyledError>{error as string}</StyledError> : null}
    </StyledInputWrapper>
  );
};
