import styled from 'styled-components';
import Colors from '../../theme/theme.colors';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${Colors.background.dark};
  color: ${Colors.text.white};
`;

export const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderItem = styled.div`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    margin-right: 40px;
  }
`;
