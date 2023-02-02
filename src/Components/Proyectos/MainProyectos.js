import Proyecto from './Proyecto';
import {
    MainProyectosContainerTheme,
    MainProyectosWrapperTheme
} from '../Cover/Cover.elements';

function MainProyectos() {
    return (
        <MainProyectosContainerTheme id='mainProyectos'>
            <MainProyectosWrapperTheme>
                <div>
                    <h2>Proyectos</h2>
                </div>
                <Proyecto img='/img/foto mia cv rectangulo.jpg' titulo='Proyecto 1' a='#' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate eget nisl et rutrum. Praesent feugiat metus sagittis congue accumsan. Nam eu turpis in nunc venenatis pulvinar eu sit amet.'/>
                <Proyecto img='/img/foto mia cv rectangulo.jpg' titulo='Proyecto 1' a='#' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate eget nisl et rutrum. Praesent feugiat metus sagittis congue accumsan. Nam eu turpis in nunc venenatis pulvinar eu sit amet.'/>
            </MainProyectosWrapperTheme>
        </MainProyectosContainerTheme>
    )
};

export default MainProyectos;