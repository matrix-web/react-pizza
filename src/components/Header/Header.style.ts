import styled from 'styled-components';
import { colors, media } from '@/helpers';
import { ContentContainer, Paragraph } from '@/components/UI';

export const StyledHeader = styled.header`
  border-bottom: 1px solid ${colors.gray200};
  padding: 30px 0;

  ${media.tablet} {
    padding: 40px 0;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${media.laptop} {
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }
`;

export const StyledImg = styled.img`
  display: block;
`;

export const StyledLogoWrapper = styled.div`
  h1 {
    color: #181818;
    font-size: 24px;
    letter-spacing: 1%;
    text-transform: uppercase;
    font-weight: 800;
  }

  p {
    color: #7b7b7b;
  }
`;

export const StyledHeaderContainer = styled(ContentContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 15px;

  ${media.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledCart = styled.div``;

export const StyledTitle = styled(Paragraph)`
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${colors.black} !important;
`;

export const StyledText = styled.span`
  color: ${colors.white};
  font-weight: 600;
  font-size: 16px;
`;

export const StyledDelimeter = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;
`;
