import {
    ProyectoWrapperTheme,
    MainProyectoImageTheme
} from '../Cover/Cover.elements';

function Proyecto(props) {
    return (
            <ProyectoWrapperTheme>
                <MainProyectoImageTheme alt='Foto de proyecto' src={props.img}/>
                <h3><a href={props.a}>{props.titulo}</a></h3>
                <p>{props.desc}</p>
            </ProyectoWrapperTheme>
    )
};

export default Proyecto;