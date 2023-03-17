import React from 'react';
import {
  HeaderUlTheme,
  HeaderTheme
} from '../Cover/Cover.elements';
import { useTranslation } from 'react-i18next';

function Header() {

  const {t} = useTranslation();

    return (
      <HeaderTheme>
        <nav>
            <HeaderUlTheme id='Header-ul'>
                <li><button id='about-a'type='button'>{t('Header.sobreMi')}</button></li>
                <li><a href='#Proyectos'>{t('Header.proyectos')}</a></li>
                <li><a href='#Contacto'>{t('Header.contacto')}</a></li>
            </HeaderUlTheme>
        </nav>
      </HeaderTheme>
    );
  }
  
  export default Header; 