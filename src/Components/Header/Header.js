import {
  HeaderUlTheme,
  HeaderTheme
} from '../Cover/Cover.elements';

function Header() {
    return (
      <HeaderTheme>
        <nav>
            <HeaderUlTheme id='Header-ul'>
                <li><button id='about-a'type='button'>Sobre mí</button></li>
                <li><a href='#Proyectos'>Proyectos</a></li>
                <li><a href='#Contacto'>Contacto</a></li>
            </HeaderUlTheme>
        </nav>
      </HeaderTheme>
    );
  }
  
  export default Header; 