import styled, { css } from 'styled-components';
import { colors } from '@/helpers';
import { Title, Button } from '@/components/UI';

export const StyledPizzaBlock = styled.section`
  max-width: 280px;
  text-align: center;
`;

export const StyledImgWrapper = styled.div`
  width: 100%;
  max-height: 280px;
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const StyledSelector = styled.div`
  display: flex;
  background-color: ${colors.gray100};
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex: 1;

  &:first-of-type {
    margin-bottom: 6px;
  }
`;

export const StyledListItem = styled.li<{ isActive: boolean }>`
  padding: 8px;
  flex: 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  user-select: none;

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${colors.white};
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
      border-radius: 5px;
      cursor: auto;
    `};
`;

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StyledPrice = styled.span`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
`;

export const StyledButtonText = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export const StyledButtonCount = styled.span`
  display: inline-block;
  border-radius: 30px;
  background-color: ${colors.orange400};
  color: ${colors.white} !important;
  font-weight: 600;
  width: 22px;
  height: 22px;
  font-style: normal;
  font-size: 13px;
  line-height: 22px;
  position: relative;
  top: -1px;
  left: 3px;
`;

export const StyledButton = styled(Button)`
  svg {
    stroke: ${colors.orange400};
  }

  &:hover,
  &:active {
    ${StyledButtonCount} {
      background-color: ${colors.white};
      color: ${colors.orange400} !important;
    }

    ${StyledButtonText} {
      color: ${colors.white};
    }

    svg {
      stroke: ${colors.white};
    }
  }
`;
