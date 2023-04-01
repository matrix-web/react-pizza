import { FC } from 'react';
import styled from 'styled-components';
import { Title, Paragraph, Button, Icon } from '@/components/UI';
import { Link } from 'react-router-dom';

const StyledNotFound = styled.section`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFound: FC = (): JSX.Element => {
  return (
    <StyledNotFound>
      <Title tag="h1" color="black">
        404 страница не найдена 😕
      </Title>
      <Paragraph color="gray400">
        К сожалению страница отсутствует в нашем магазине
      </Paragraph>
      <Link to="/">
        <Button isLink>
          <Icon name="arrow-left" size={20} color="gray400" />
          Вернуться на главную
        </Button>
      </Link>
    </StyledNotFound>
  );
};

export default NotFound;
