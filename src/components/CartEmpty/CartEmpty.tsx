import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Paragraph, Button, Icon } from '@/components/UI';
import emptyCartImg from '@/assets/img/empty-cart.png';
import {
  StyledCartEmpty,
  StyledTitle,
  StyledHeader,
  StyledImg,
} from './CartEmpty.style';

export const CartEmpty: FC = (): JSX.Element => {
  return (
    <StyledCartEmpty>
      <StyledHeader>
        <StyledTitle tag="h2" weight={700} color="black">
          Корзина пустая 😕
        </StyledTitle>
        <Paragraph size={16} weight={400} color="gray400">
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </Paragraph>
      </StyledHeader>
      <StyledImg src={emptyCartImg} alt="Empty cart" />
      <Link to="/">
        <Button isOutline variant="secondary">
          <Icon name="arrow-left" size={20} color="gray400" />
          Вернуться на главную
        </Button>
      </Link>
    </StyledCartEmpty>
  );
};
