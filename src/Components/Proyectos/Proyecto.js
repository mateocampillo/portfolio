import {
    ProyectoWrapperTheme,
    MainProyectoImageTheme
} from '../Cover/Cover.elements';

function Proyecto(props) {
    return (
            <ProyectoWrapperTheme>
                <a href={props.a} target={'_blank'} rel="noreferrer"><MainProyectoImageTheme alt='Foto de proyecto' src={props.img}/></a>
                <h3><a href={props.a} target={'_blank'} rel="noreferrer">{props.titulo}</a></h3>
                <p>{props.desc}</p>
            </ProyectoWrapperTheme>
    )
};

export default Proyecto;