import {
  HeaderUlTheme,
  HeaderTheme
} from '../Cover/Cover.elements';

function Header() {
    return (
      <HeaderTheme>
        <nav>
            <HeaderUlTheme id='Header-ul'>
                <li><a id='about-a' href='/'>About</a></li>
                <li><a href='/'>Proyectos</a></li>
                <li><a href='/'>Contacto</a></li>
            </HeaderUlTheme>
        </nav>
      </HeaderTheme>
    );
  }
  
  export default Header; 