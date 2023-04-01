import { FC, useState, useRef, useEffect, memo } from 'react';
import styled, { CSSProperties, css } from 'styled-components';
import { Icon } from '@/components/UI';
import { colors } from '@/helpers';
import { ISortItem } from '@/helpers/interfaces';

interface SortProps {
  sortList: ISortItem[];
  value: ISortItem;
  onClick: (value: ISortItem) => void;
  className?: string;
  style?: CSSProperties;
}

type PopupClick = MouseEvent & {
  path: Node[];
};

const StyledSort = styled.div`
  position: relative;
`;

const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledText = styled.span`
  color: ${colors.orange400};
  border-bottom: 1px dashed ${colors.orange400};
  cursor: pointer;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledBoldText = styled.span`
  font-weight: 700;
`;

const StyledSortPopup = styled.div`
  position: absolute;
  right: 0;
  margin-top: 15px;
  background: ${colors.white};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  width: 160px;
`;

const StyledList = styled.ul`
  overflow: hidden;
`;

const StyledListItem = styled.li<{ isActive?: boolean }>`
  padding: 12px 20px;
  cursor: pointer;

  &.active,
  &:hover {
    background: rgba(254, 95, 30, 0.05);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: bold;
      color: ${colors.orange400};
      background: rgba(254, 95, 30, 0.05);
    `}
`;

export const Sort: FC<SortProps> = memo((props): JSX.Element => {
  const { className, sortList, style, value, onClick } = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const handleClick = (item: ISortItem) => {
    onClick(item);
    setIsVisible(false);
  };

  const handleClosePopup = (event: MouseEvent) => {
    const _event = event as MouseEvent & PopupClick;

    if (sortRef.current && !_event.path.includes(sortRef.current)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const body = document.body;

    body.addEventListener('click', handleClosePopup);

    return () => {
      body.removeEventListener('click', handleClosePopup);
    };
  }, []);

  return (
    <StyledSort ref={sortRef} className={className} style={style}>
      <StyledLabel>
        <Icon name="arrow-top" size={16} color="black" colorProperty="fill" />
        <StyledTextWrapper>
          <StyledBoldText>Сортировка по:</StyledBoldText>
          <StyledText onClick={() => setIsVisible((prevValue) => !prevValue)}>
            {value.title}
          </StyledText>
        </StyledTextWrapper>
      </StyledLabel>
      {isVisible ? (
        <StyledSortPopup>
          <StyledList>
            {sortList.map((item) => (
              <StyledListItem
                isActive={item.id === value.id}
                key={item.id}
                onClick={() => handleClick(item)}>
                {item.title}
              </StyledListItem>
            ))}
          </StyledList>
        </StyledSortPopup>
      ) : (
        <></>
      )}
    </StyledSort>
  );
});
