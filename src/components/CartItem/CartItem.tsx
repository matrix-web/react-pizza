import { FC } from 'react';
import { Paragraph, Title, Button, Icon } from '@/components/UI';
import { ICartItem } from '@/helpers/interfaces';
import { formatPrice } from '@/helpers/utils';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { deleteItem, updateItem } from '@/store/slices/cartSlice';
import {
  StyledCartItem,
  StyledImgWrapper,
  StyledImg,
  StyledInfo,
  StyledCount,
  StyledPrice,
  StyledRemove,
} from './CartItem.style';

interface CartItemProps {
  item: ICartItem;
  onRemove?: () => void;
}

export const CartItem: FC<CartItemProps> = (props): JSX.Element => {
  const { item, onRemove } = props;
  const formattedPrice = formatPrice(item.price * item.count);
  const dispatch = useAppDispatch();

  const handleChangeCount = async (item: ICartItem, action: 'dec' | 'inc') => {
    let newCount = item.count;

    switch (action) {
      case 'inc':
        await dispatch(
          updateItem({
            productId: item.productId._id,
            count: newCount + 1,
            size: item.size,
            type: item.type,
          }),
        );
        break;
      case 'dec':
        await dispatch(
          updateItem({
            productId: item.productId._id,
            count: newCount - 1,
            size: item.size,
            type: item.type,
          }),
        );
        break;
    }
  };

  const handleRemove = async () => {
    await dispatch(deleteItem(item.productId._id));
    onRemove && onRemove();
  };

  return (
    <StyledCartItem>
      <StyledImgWrapper>
        <StyledImg src={item.imageUrl} alt={item.title} />
      </StyledImgWrapper>
      <StyledInfo>
        <Title tag="h4" color="black">
          {item.title}
        </Title>
        <Paragraph size={18} weight={400} color="gray700">
          {item.type.title}, {item.size} см.
        </Paragraph>
      </StyledInfo>
      <StyledCount>
        <Button
          isDisabled={item.count === 1}
          isCircle
          isOutline
          onClick={() => handleChangeCount(item, 'dec')}>
          <Icon
            name="minus"
            size={10}
            color={item.count === 1 ? 'gray300' : 'orange400'}
            colorProperty="fill"
          />
        </Button>
        <Paragraph size={22} color="black" weight={700}>
          {item.count}
        </Paragraph>
        <Button
          isCircle
          isOutline
          onClick={() => handleChangeCount(item, 'inc')}>
          <Icon name="plus" size={10} />
        </Button>
      </StyledCount>
      <StyledPrice>
        <Paragraph size={22} color="black" weight={700}>
          {formattedPrice}
        </Paragraph>
      </StyledPrice>
      <StyledRemove>
        <Button isCircle isOutline variant="secondary" onClick={handleRemove}>
          <Icon name="cross" size={16} color="gray400" colorProperty="fill" />
        </Button>
      </StyledRemove>
    </StyledCartItem>
  );
};
