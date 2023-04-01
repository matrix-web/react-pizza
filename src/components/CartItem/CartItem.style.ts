import styled from 'styled-components';
import { colors } from '@/helpers';

export const StyledCartItem = styled.section`
  display: flex;
  width: 100%;
  border-top: 1px solid ${colors.gray100};
  padding: 30px 0;
`;

export const StyledImgWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;

export const StyledCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13%;
`;

export const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
`;

export const StyledRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 4%;
`;
