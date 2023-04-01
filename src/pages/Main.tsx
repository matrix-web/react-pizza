import { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import {
  Sort,
  Categories,
  ContentContainer,
  Title,
  Pagination,
  Paragraph,
} from '@/components/UI';
import { PizzaBlock, Skeleton } from '@/components';
import { media } from '@/helpers';
import { categoriesList, sortList } from '@/data';
import { Statuses } from '@/helpers/enums';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchProducts, productsSelector } from '@/store/slices/productsSlice';
import {
  setCategory,
  setCurrentPage,
  setSort,
  setFilters,
  filterSelector,
} from '@/store/slices/filterSlice';
import { ICategory, ISortItem } from '@/helpers/interfaces';
import { cartSelector, fetchItems } from '@/store/slices/cartSlice';

const StyledContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 10px;

  ${media.laptop} {
    flex-direction: row;
  }

  ${media.desktop} {
    align-items: center;
  }
`;

const StyledItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 35px;
  justify-items: center;
  margin-bottom: 40px;

  ${media.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
  }
`;

const StyledTitle = styled(Title)`
  margin: 35px 0;
`;

const StyledSort = styled(Sort)`
  flex-shrink: 0;
  flex-grow: 1;

  ${media.desktop} {
    flex-shink: initial;
    flex-grow: initial;
  }
`;

const StyledProductsError = styled.div`
  text-align: center;
`;

const Main: FC = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isSearch = useRef<boolean>(false);
  const isMounted = useRef<boolean>(false);
  const dispatch = useAppDispatch();

  const { products, status, meta } = useAppSelector(productsSelector);
  const { category, sort, currentPage, search } =
    useAppSelector(filterSelector);
  const { meta: cartMeta } = useAppSelector(cartSelector);

  const getProducts = useCallback(async () => {
    await dispatch(
      fetchProducts({
        categoryId: +category.id,
        sortType: sort.value,
        page: currentPage,
        search,
      }),
    );
  }, []);

  const getCartItems = async () => {
    await dispatch(
      fetchItems({
        page: cartMeta?.page || 1,
        limit: cartMeta?.limit || 10,
      }),
    );
  };

  const handleChangeCategory = useCallback((category: ICategory) => {
    dispatch(setCategory(category));
  }, []);

  const handleClickSort = useCallback((sortItem: ISortItem) => {
    dispatch(setSort(sortItem));
  }, []);

  const handleAdd = useCallback(async () => {
    await getCartItems();
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      setSearchParams({
        category: `${category.id}`,
        sort: sort.value,
        currentPage: `${currentPage}`,
      });
    }
    isMounted.current = true;
  }, [category, sort, currentPage]);

  useEffect(() => {
    const searchCategory = searchParams.get('category');
    const searchSort = searchParams.get('sort');
    const searchPage = searchParams.get('currentPage');
    const selectedCategory =
      searchCategory &&
      categoriesList.find((category) => category.id === +searchCategory);
    const selectedSort =
      searchSort && sortList.find((sortItem) => sortItem.value === searchSort);
    if (selectedCategory && selectedSort && searchPage) {
      dispatch(
        setFilters({
          category: selectedCategory,
          sort: selectedSort,
          currentPage: +searchPage,
        }),
      );
      isSearch.current = true;
    }

    getCartItems();
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      getProducts();
    }

    isSearch.current = false;
  }, [category, sort, currentPage, search]);

  return (
    <ContentContainer>
      <StyledContentTop>
        <Categories
          categories={categoriesList}
          value={category}
          onChange={handleChangeCategory}
        />
        <StyledSort
          sortList={sortList}
          value={sort}
          onClick={handleClickSort}
        />
      </StyledContentTop>
      <StyledTitle tag="h2" color="black" weight={700}>
        Все пиццы
      </StyledTitle>
      <StyledItems>
        {status === Statuses.ERROR ? (
          <StyledProductsError>
            <Title tag="h2">Произошла ошибка 😕</Title>
            <Paragraph color="gray400">
              К сожалению, не удалось получить товары. <br /> Попробуйте
              повторить попытку позже.
            </Paragraph>
          </StyledProductsError>
        ) : status === Statuses.LOADING ? (
          [...new Array(4)].map((_, index) => <Skeleton key={index} />)
        ) : (
          products.map((item) => (
            <PizzaBlock key={item._id} product={item} onAdd={handleAdd} />
          ))
        )}
      </StyledItems>
      {status === Statuses.SUCCESS ? (
        <Pagination
          currentPage={currentPage}
          totalCount={meta.totalCount}
          pageSize={meta.limit}
          onPageChange={(page) => dispatch(setCurrentPage(+page))}
        />
      ) : (
        <></>
      )}
    </ContentContainer>
  );
};

export default Main;
