import './header.styles.css';
import { BsCart3 } from 'react-icons/bs';

const Header = () => {
  return (
    <header className='header-container'>
      <h2 className='header-title'>CLUB CLOTHING</h2>
      <div className='header-items'>
        <div className='header-item'>Explorar</div>
        <div className='header-item'>Login</div>
        <div className='header-item'>Criar Conta</div>
        <div className='header-item'>
          <BsCart3 size={25} />
        </div>
      </div>
    </header>
  );
};

export default Header;
