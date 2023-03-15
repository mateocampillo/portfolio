import React from 'react';
import {
  MainInfoTheme,
  MainInfoIntroTheme,
  MainInfoDescTheme,
  MainInfoIconsTheme
} from '../Cover/Cover.elements';
import {BiWorld} from 'react-icons/bi';

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
          <div><BiWorld /><h4>Buenos Aires, Argentina</h4></div>
          <button id="mainInfo-button">About me</button>
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