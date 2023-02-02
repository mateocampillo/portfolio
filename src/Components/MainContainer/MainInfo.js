import {
  MainInfoTheme,
  MainInfoIntroTheme,
  MainInfoDescTheme,
  MainInfoIconsTheme
} from '../Cover/Cover.elements';

function MainInfo() {
    return (
      <MainInfoTheme id='mainInfo'>
        <MainInfoIntroTheme id='mainInfo-intro'>
          <h3>Hola! mi nombre es</h3>
          <h1>Mateo<br/>Campillo</h1>
          <h2>Desarrollador Web</h2>
        </MainInfoIntroTheme>
        <MainInfoDescTheme id='mainInfo-desc'>
          <p>Apasionado por la creacion, el diseño y el progreso.</p>
          <div><i class="fa-solid fa-location-dot"></i><h4>Argentina, Buenos Aires</h4></div>
          <button id="mainInfo-button">About me</button>
        </MainInfoDescTheme>
        <MainInfoIconsTheme id='mainInfo-icons'>
          <a href="https://www.linkedin.com/in/mateocampillo/"><i class="devicon-linkedin-plain"></i></a>
          <a href="https://github.com/mateocampillo"><i class="devicon-github-original"></i></a>
          <button id="mainInfoIcons-button"><i class="fa-solid fa-language"></i><p>English</p></button>
        </MainInfoIconsTheme>
      </MainInfoTheme>
    );
  }
  
  export default MainInfo; 