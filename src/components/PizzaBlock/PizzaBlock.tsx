import { FC, useState } from 'react';
import { Icon } from '@/components/UI';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  addCartItem,
  cartSelector,
  updateItem,
} from '@/store/slices/cartSlice';
import {
  StyledPizzaBlock,
  StyledImgWrapper,
  StyledImg,
  StyledTitle,
  StyledSelector,
  StyledList,
  StyledListItem,
  StyledFooter,
  StyledPrice,
  StyledButtonText,
  StyledButtonCount,
  StyledButton,
} from './PizzaBlock.style';
import { IProduct } from '@/helpers/interfaces';

interface PizzaBlockProps {
  product: IProduct;
  onAdd?: (id: string) => void;
}
const typeNames = ['Тонкое', 'Традиционное'];

export const PizzaBlock: FC<PizzaBlockProps> = (props): JSX.Element => {
  const { product, onAdd } = props;
  const { _id, imageUrl, price, sizes, title, types } = product;
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const { items, status } = useAppSelector(cartSelector);

  const cartItem = useAppSelector((state) =>
    state.cart.items.find((item) => item.productId._id === _id),
  );
  const dispatch = useAppDispatch();

  const handleClickAdd = async () => {
    const params = {
      productId: product._id,
      count: 1,
      size: product.sizes[activeSize],
      type: {
        id: activeType,
        title: typeNames[activeType],
      },
    };

    if (items.length && cartItem) {
      const newCount = cartItem ? cartItem.count + 1 : 1;

      await dispatch(
        updateItem({
          ...params,
          count: newCount,
        }),
      );
      onAdd && onAdd(_id);
    } else {
      await dispatch(addCartItem(params));
      onAdd && onAdd(_id);
    }
  };

  return (
    <StyledPizzaBlock>
      <StyledImgWrapper>
        <StyledImg src={imageUrl} alt={title} />
      </StyledImgWrapper>
      <StyledTitle tag="h5">{title}</StyledTitle>
      <StyledSelector>
        <StyledList>
          {types.map((type, i) => (
            <StyledListItem
              key={type}
              isActive={activeType === i}
              onClick={() => setActiveType(type)}>
              {typeNames[type]}
            </StyledListItem>
          ))}
        </StyledList>
        <StyledList>
          {sizes.map((size, i) => (
            <StyledListItem
              key={size}
              isActive={activeSize === i}
              onClick={() => setActiveSize(i)}>
              {size} см.
            </StyledListItem>
          ))}
        </StyledList>
      </StyledSelector>
      <StyledFooter>
        <StyledPrice>от {price} ₽</StyledPrice>
        <StyledButton isOutline onClick={handleClickAdd}>
          <Icon name="plus" size={20} colorProperty="stroke" />
          <StyledButtonText>Добавить</StyledButtonText>
          {cartItem?.count ? (
            <StyledButtonCount>{cartItem?.count}</StyledButtonCount>
          ) : (
            <></>
          )}
        </StyledButton>
      </StyledFooter>
    </StyledPizzaBlock>
  );
};
