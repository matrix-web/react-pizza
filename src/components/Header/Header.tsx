import { FC, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/img/svg/pizza-logo.svg';
import { Paragraph, Input, Button, Icon } from '@/components/UI';
import { formatPrice } from '@/helpers/utils';
import debounce from 'lodash.debounce';
import { useAppSelector } from '@/hooks/useAppSelector';
import { cartSelector } from '@/store/slices/cartSlice';
import { setSearch } from '@/store/slices/filterSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import {
  StyledHeader,
  StyledLogo,
  StyledWrapper,
  StyledText,
  StyledDelimeter,
  StyledImg,
  StyledLogoWrapper,
  StyledHeaderContainer,
  StyledCart,
  StyledTitle,
} from './Header.style';

export const Header: FC = (): JSX.Element => {
  const [searchValue, setSetSearchValue] = useState<string>('');
  const { totalPrice } = useAppSelector(cartSelector);
  const price = formatPrice(totalPrice);
  const dispatch = useAppDispatch();

  const handleSearchDebounce = useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 500),
    [],
  );

  const handleSearch = (value: string) => {
    setSetSearchValue(value);
    handleSearchDebounce(value);
  };

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledWrapper>
          <Link to="/">
            <StyledLogo>
              <StyledImg width="38" src={logo} alt="Pizza logo" />
              <StyledLogoWrapper>
                <StyledTitle size={24} weight={800} color="black">
                  React pizza
                </StyledTitle>
                <Paragraph size={16} weight={400} color="gray500">
                  самая вкусная пицца во вселенной
                </Paragraph>
              </StyledLogoWrapper>
            </StyledLogo>
          </Link>
          <Input
            placeholder="Поиск..."
            isSearch
            type="text"
            value={searchValue}
            onChange={handleSearch}
          />
        </StyledWrapper>
        <StyledCart>
          <Link to="/cart">
            <Button variant="primary">
              <StyledText>{price}</StyledText>
              <StyledDelimeter></StyledDelimeter>
              <Icon
                name="cart"
                size={24}
                color="white"
                colorProperty="stroke"
              />
            </Button>
            <StyledText>0</StyledText>
          </Link>
        </StyledCart>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
