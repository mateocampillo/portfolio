import {
  MainInfoTheme,
  MainInfoIntroTheme,
  MainInfoDescTheme,
  MainInfoIconsTheme
} from '../Cover/Cover.elements';

function MainInfo() {
    return (
      <>
      <MainInfoTheme id='mainInfo'>
        <MainInfoIntroTheme id='mainInfo-intro'>
          <h1>Mateo<br/>Campillo</h1>
          <h2>Desarrollador Web</h2>
        </MainInfoIntroTheme>
        <MainInfoDescTheme id='mainInfo-desc'>
          <p>Apasionado por la <span className="underlined underline-clip">creación</span>, el <span className="multicolor">diseño</span> y el progreso.</p>
          <div><i className="fa-solid fa-location-dot"></i><h4>Buenos Aires, Argentina</h4></div>
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