import React, {useContext} from 'react';
import {
  MainInfoTheme,
  MainInfoIntroTheme,
  MainInfoDescTheme,
  MainInfoIconsTheme
} from '../Cover/Cover.elements';
import {BiWorld} from 'react-icons/bi';
import {MdLocationOn} from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import LocaleContext from '../Extras/LocaleContext';
import i18n from '../../i18n';

function MainInfo() {

  const {t} = useTranslation();
  const {locale} = useContext(LocaleContext);
  function changeLocale () {
    if (locale.includes('es')) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }

  let languageMode = locale === 'en' ? 'Español' : 'Ingles' ;

    return (
      <>
      <MainInfoTheme id='mainInfo'>
        <MainInfoIntroTheme id='mainInfo-intro'>
          <p>{t('MainInfo.intro.jobTitle')}</p>
          <h1>Mateo<br/>Campillo</h1>
          <h2>{t('MainInfo.intro.taglineDesktop')}</h2>
        </MainInfoIntroTheme>
        <MainInfoDescTheme id='mainInfo-desc'>
          <div id='mainInfo-desc-mobile'>
            <div id='mainInfo-location'><BiWorld /><h4>Buenos Aires, Argentina</h4></div>
            <button id="mainInfo-button">{t('MainInfo.intro.buttonMobile')}</button>
          </div>
          <div id='mainInfo-desc-desktop'>
            <div id='MDD-button-container'><button id="MDD-button">{t('MainInfo.desc.sobreMi')}</button></div>
            <div id='MDD-button-container'><img src='/img/htmltag.png' alt='logo html'/></div>
            <div id='MDD-button-container'></div>
            <div id='MDD-globe-container'>
              <i class='fas fa-globe-americas'></i>
              <MdLocationOn id='MDD-globe-location' className='bounce'/>
            </div>
          </div>
        </MainInfoDescTheme>
      </MainInfoTheme>
      <MainInfoIconsTheme id='mainInfo-icons'>
          <a href="https://www.linkedin.com/in/mateocampillo/"><i className="devicon-linkedin-plain"></i></a>
          <a href="https://github.com/mateocampillo"><i className="devicon-github-original"></i></a>
          <button id="mainInfoIcons-button" onClick={() => changeLocale()}><i className="fa-solid fa-language"></i><p>{languageMode}</p></button>
        </MainInfoIconsTheme>
      </>
    );
  }
  
  export default MainInfo; 