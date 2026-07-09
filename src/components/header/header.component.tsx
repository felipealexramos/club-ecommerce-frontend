import { HeaderContainer, HeaderItem, HeaderItems } from './header.styles';
import { BsCart3 } from 'react-icons/bs';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItems>CLUB CLOTHING</HeaderItems>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem>Login</HeaderItem>
        <HeaderItem>Criar Conta</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
