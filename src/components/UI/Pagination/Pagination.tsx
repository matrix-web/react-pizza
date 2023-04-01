import { FC } from 'react';
import styled, { CSSProperties, css } from 'styled-components';
import { usePagination, DOTS } from '@/hooks/usePagination';
import { Icon } from '@/components/UI';
import { IPaginationProps } from '@/helpers/interfaces';
import { colors } from '@/helpers';

interface PaginationProps extends IPaginationProps {
  className?: string;
  style?: CSSProperties;
  onPageChange: (page: number | string) => void;
}

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledItem = styled.li<{ isDisabled?: boolean; isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-family: var(--font-brand);
  color: ${colors.orange400};
  border: 1px solid ${colors.orange400};
  cursor: pointer;
  transition: var(--duration);

  &:hover {
    transform: translateY(1px);
    background-color: ${colors.orange400};
    color: ${colors.white};

    svg {
      fill: ${colors.white};
    }
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${colors.orange400};
      color: ${colors.white};
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      border-color: ${colors.gray300};
      user-select: none;
      cursor: not-allowed;
      pointer-events: none;
    `};
`;

export const Pagination: FC<PaginationProps> = (props): JSX.Element => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    style,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (paginationRange) {
    if (paginationRange?.length < 2) {
      return <></>;
    }
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage - 1 > 0) onPageChange(currentPage - 1);
  };

  const lastPage =
    paginationRange && paginationRange[paginationRange.length - 1];

  return (
    <StyledList className={className} style={style}>
      <StyledItem onClick={onPrevious} isDisabled={currentPage === 1}>
        <Icon
          name="arrow-left"
          size={24}
          color={currentPage === 1 ? 'gray300' : 'orange400'}
        />
      </StyledItem>
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <StyledItem key={pageNumber}>{DOTS}</StyledItem>;
        }

        return (
          <StyledItem
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            isSelected={pageNumber === currentPage}>
            {pageNumber}
          </StyledItem>
        );
      })}
      <StyledItem onClick={onNext} isDisabled={currentPage === lastPage}>
        <Icon
          name="arrow-right"
          size={24}
          color={currentPage === lastPage ? 'gray300' : 'orange400'}
        />
      </StyledItem>
    </StyledList>
  );
};
