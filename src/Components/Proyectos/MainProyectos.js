import Proyecto from './Proyecto';
import {
    MainProyectosContainerTheme,
    MainProyectosWrapperTheme,
    MainProyectoTituloH2Theme
} from '../Cover/Cover.elements';
import DividerCloud from '../Extras/DividerCloud';

function MainProyectos() {
    return (
        <MainProyectosContainerTheme id='Proyectos'>
            <DividerCloud />
            <div>
                <MainProyectoTituloH2Theme>Proyectos</MainProyectoTituloH2Theme>
            </div>
            <MainProyectosWrapperTheme>
                <Proyecto img='/img/infoRadiant_frame.png' titulo='InfoRadiant' a='https://info-radiant.vercel.app/' desc='Con este proyecto decidí crear una página que consuma una API externa, priorizando que el diseño sea sencillo y elegante, y que la información sea fácil de consumir. Construida con React, más otras librerias para facilitar la navegación. API consumida vía Fetch.'/>
                <Proyecto img='/img/working_frame.png' titulo='eCommerce' a='#' desc='Proyecto actualmente en etapa de desarrollo, con el objetivo de generar un mockup de un eCommerce, haciendo hincapié en la interaccion y el diseño orientado a una grata user experience.'/>
            </MainProyectosWrapperTheme>
        </MainProyectosContainerTheme>
    )
};

export default MainProyectos;