import styled from 'styled-components';
import Colors from '../../theme/theme.colors';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${Colors.background.dark};
  color: ${Colors.text.white};
`;
