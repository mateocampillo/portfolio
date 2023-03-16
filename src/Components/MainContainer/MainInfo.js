import React from 'react';
import {
  MainInfoTheme,
  MainInfoIntroTheme,
  MainInfoDescTheme,
  MainInfoIconsTheme
} from '../Cover/Cover.elements';
import {BiWorld} from 'react-icons/bi';
import {MdLocationOn} from 'react-icons/md';

function MainInfo() {
    return (
      <>
      <MainInfoTheme id='mainInfo'>
        <MainInfoIntroTheme id='mainInfo-intro'>
          <p>Desarrollador Web</p>
          <h1>Mateo<br/>Campillo</h1>
          <h2>Apasionado por la creación, los diseños elegantes y el progreso.</h2>
        </MainInfoIntroTheme>
        <MainInfoDescTheme id='mainInfo-desc'>
          <div id='mainInfo-desc-mobile'>
            <div id='mainInfo-location'><BiWorld /><h4>Buenos Aires, Argentina</h4></div>
            <button id="mainInfo-button">Sobre mí</button>
          </div>
          <div id='mainInfo-desc-desktop'>
            <div id='MDD-button-container'><button id="MDD-button">Sobre mí</button></div>
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
          <button id="mainInfoIcons-button"><i className="fa-solid fa-language"></i><p>English</p></button>
        </MainInfoIconsTheme>
      </>
    );
  }
  
  export default MainInfo; 