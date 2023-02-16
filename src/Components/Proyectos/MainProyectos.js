import Proyecto from './Proyecto';
import {
    MainProyectosContainerTheme,
    MainProyectosWrapperTheme,
    MainProyectoTituloH2Theme
} from '../Cover/Cover.elements';

function MainProyectos() {
    return (
        <MainProyectosContainerTheme id='Proyectos'>
            <div>
                <MainProyectoTituloH2Theme>Proyectos</MainProyectoTituloH2Theme>
            </div>
            <MainProyectosWrapperTheme>
                <Proyecto img='/img/frame_chrome_win10_light.png' titulo='InfoRadiant' a='https://info-radiant.vercel.app/' desc='Con este proyecto decidí crear una página que consuma una API externa, priorizando que el diseño sea sencillo y elegante, y que la información sea fácil de consumir. Construida con React, más otras librerias para facilitar la navegación. API consumida vía Fetch.'/>
                <Proyecto img='/img/foto mia cv rectangulo.jpg' titulo='Proyecto 1' a='#' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate eget nisl et rutrum. Praesent feugiat metus sagittis congue accumsan. Nam eu turpis in nunc venenatis pulvinar eu sit amet.'/>
            </MainProyectosWrapperTheme>
        </MainProyectosContainerTheme>
    )
};

export default MainProyectos;