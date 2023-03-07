import {
  SectionAboutTheme,
  SectionAboutImageTheme,
  SectionAboutStackTheme,
  SectionAboutImageDivTheme,
  SectionAboutTextoTheme
} from '../Cover/Cover.elements';

function SectionAbout() {
    return (
      <SectionAboutTheme id='sectionAbout'>
        <svg id='cerrarAbout' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
        <SectionAboutImageDivTheme><SectionAboutImageTheme alt='foto-mateo-campillo' src="/img/foto mia cv rectangulo.jpg"/></SectionAboutImageDivTheme>
        <SectionAboutTextoTheme>
          <div><p>Buenas! mi nombre es Mateo Campillo, web developer.</p></div>
          <div><p>Desde pequeño sabia que mi carrera se iba a desarrollar de forma electrónica, y cuando descubrí el web development me enamore por completo. Siento que me permite crecer constantemente y explotar mi creatividad.</p></div>
          <div><p>Otro parrafo aca Otro parrafo aca Otro parrafo aca v Otro parrafo aca Otro parrafo aca Otro parrafo aca Otro parrafo aca Otro parrafo aca Otro parrafo aca Otro parrafo aca</p></div>
          <div><p>Stack MERN y algunas tecnologías más:</p></div>
          <SectionAboutStackTheme id='aboutTechStack'>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-nodejs-plain colored"></i>
            <i class="devicon-express-original colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-mysql-plain colored"></i>
            <i class="devicon-bootstrap-plain colored"></i>
            <i class="devicon-html5-plain"></i>
            <i class="devicon-css3-plain colored"></i>
          </SectionAboutStackTheme>
        </SectionAboutTextoTheme>
      </SectionAboutTheme>
    );
  }
  
  export default SectionAbout; 