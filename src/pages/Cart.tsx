import { FC, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import {
  ContentContainer,
  Title,
  Icon,
  Paragraph,
  Button,
  Loader,
} from '@/components/UI';
import { Link } from 'react-router-dom';
import { CartItem, CartEmpty } from '@/components';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { formatPrice } from '@/helpers/utils';
import { cartSelector, clearItems, fetchItems } from '@/store/slices/cartSlice';
import { ICartItem } from '@/helpers/interfaces';

const StyledCart = styled.section``;

const StyledLoaderWrapper = styled.div`
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const StyledTitle = styled(Title)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledCartItems = styled.div``;

const StyledFooter = styled.footer`
  padding: 50px 0 0;
`;

const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledText = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const Cart: FC = (): JSX.Element => {
  const { items, totalPrice, isRemoveLoading, meta } =
    useAppSelector(cartSelector);
  const dispatch = useAppDispatch();
  const formattedTotalPrice = formatPrice(totalPrice);
  const totalCount = items.reduce((prev, obj) => prev + obj.count, 0);

  const getItems = async () => {
    await dispatch(
      fetchItems({
        page: meta.page,
        limit: meta.limit,
      }),
    );
  };

  const handleClear = async () => {
    await dispatch(clearItems());
    await getItems();
  };

  const handleRemove = useCallback(async () => {
    await getItems();
  }, []);

  useEffect(() => {
    getItems();
  }, []);

  return (
    <ContentContainer isCart>
      {isRemoveLoading ? (
        <StyledLoaderWrapper>
          <Loader size={64} colorLine1="blue400" colorLine2="black" />
        </StyledLoaderWrapper>
      ) : items.length ? (
        <StyledCart>
          <StyledHeader>
            <StyledTitle tag="h1" color="black">
              <Icon
                name="cart"
                size={30}
                color="black"
                colorProperty="stroke"
              />
              Корзина
            </StyledTitle>
            <Button isLink onClick={handleClear}>
              <Icon
                name="trash"
                size={20}
                color="gray300"
                colorProperty="stroke"
              />
              Очистить корзину
            </Button>
          </StyledHeader>
          <StyledCartItems>
            {items.map((item: ICartItem) => (
              <CartItem key={item._id} item={item} onRemove={handleRemove} />
            ))}
          </StyledCartItems>
          <StyledFooter>
            <StyledDetails>
              <StyledText>
                <Paragraph size={22} color="black" weight={400}>
                  Всего пицц:
                </Paragraph>
                <Paragraph size={22} weight={700} color="black">
                  {totalCount} шт.
                </Paragraph>
              </StyledText>
              <StyledText>
                <Paragraph size={22} color="black" weight={400}>
                  Сумма заказа:
                </Paragraph>
                <Paragraph size={22} weight={700} color="orange400">
                  {formattedTotalPrice}
                </Paragraph>
              </StyledText>
            </StyledDetails>
            <StyledButtons>
              <Link to="/">
                <Button isOutline variant="secondary">
                  <Icon size={20} name="arrow-left" color="gray400" />
                  Вернуться назад
                </Button>
              </Link>
              <Button variant="primary">Оплатить сейчас</Button>
            </StyledButtons>
          </StyledFooter>
        </StyledCart>
      ) : (
        <CartEmpty />
      )}
    </ContentContainer>
  );
};

export default Cart;
