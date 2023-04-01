import { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import { media, colors } from '@/helpers';

const StyledWrapper = styled.div`
  width: calc(100vw - 10px);
  height: 100%;
  background-color: ${colors.white};
  margin: 50px auto;
  border-radius: 10px;
  max-width: 1400px;

  ${media.tablet} {
    width: calc(100vw - 100px);
  }
`;

const StyledContent = styled.div`
  padding: 20px 0;

  ${media.tablet} {
    padding: 40px 0;
  }
`;

export const DefaultLayout: FC = (): JSX.Element => {
  return (
    <StyledWrapper>
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </StyledWrapper>
  );
};
