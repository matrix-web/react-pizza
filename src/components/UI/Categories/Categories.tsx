import { FC, memo } from 'react';
import styled, { CSSProperties, css } from 'styled-components';
import { colors } from '@/helpers';
import { ICategory } from '@/helpers/interfaces';

interface CategoriesProps {
  categories: ICategory[];
  value: ICategory;
  className?: string;
  style?: CSSProperties;
  onChange?: (category: ICategory) => void;
}

const StyledCategories = styled.div``;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
`;

const StyledListItem = styled.li<{ isActive: boolean }>`
  background-color: ${colors.gray200};
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color var(--duration) ease-in-out;
  user-select: none;

  &:hover {
    background-color: ${colors.gray300};
  }

  &:active {
    background-color: ${colors.gray400};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${colors.black};
      color: ${colors.white};
    `}
`;

export const Categories: FC<CategoriesProps> = memo((props): JSX.Element => {
  const { className, style, categories, value, onChange } = props;

  const handleCategoryClick = (category: ICategory) => {
    onChange && onChange(category);
  };

  return (
    <StyledCategories className={className} style={style}>
      <StyledList>
        {categories.map((category) => (
          <StyledListItem
            isActive={category.id === value.id}
            onClick={() => handleCategoryClick(category)}
            key={category.id}>
            {category.title}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledCategories>
  );
});
