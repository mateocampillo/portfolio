import React from 'react';
import {
  SectionAboutTheme,
  SectionAboutImageTheme,
  SectionAboutStackTheme,
  SectionAboutImageDivTheme,
  SectionAboutTextoTheme
} from '../Cover/Cover.elements';
import { useTranslation } from 'react-i18next';

function SectionAbout() {

  const {t} = useTranslation();

    return (
      <SectionAboutTheme id='sectionAbout'>
        <svg id='cerrarAbout' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
        <SectionAboutImageDivTheme><SectionAboutImageTheme alt='foto-mateo-campillo' src="/img/foto mia cv rectangulo.jpg"/></SectionAboutImageDivTheme>
        <SectionAboutTextoTheme>
          <div><p>{t('About.parrafoN1')}</p></div>
          <div><p>{t('About.parrafoN2')}</p></div>
          <div><p>{t('About.parrafoN3')}</p></div>
          <div><p>{t('About.parrafoN4')}</p></div>
          <div><p>{t('About.parrafoN5')}</p></div>
          <SectionAboutStackTheme id='aboutTechStack'>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-nodejs-plain colored"></i>
            <i className="devicon-express-original colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-mysql-plain colored"></i>
            <i className="devicon-bootstrap-plain colored"></i>
            <i className="devicon-html5-plain"></i>
            <i className="devicon-css3-plain colored"></i>
          </SectionAboutStackTheme>
        </SectionAboutTextoTheme>
      </SectionAboutTheme>
    );
  }
  
  export default SectionAbout; 