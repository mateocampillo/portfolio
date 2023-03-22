import {
    ProyectoWrapperTheme,
    MainProyectoImageTheme
} from '../Cover/Cover.elements';
import Swal from 'sweetalert2';

function Proyecto(props) {

    const swalEcommerce = (e) => {
        if(props.a === '#'){
            e.preventDefault();
            Swal.fire({
                icon: 'info',
                title: 'In development',
                text: 'Coming soon.'
                })
            }
        }
    
    return (
            <ProyectoWrapperTheme>
                <a href={props.a} target={'_blank'} rel="noreferrer" onPointerDown={swalEcommerce}><MainProyectoImageTheme alt='Foto de proyecto' src={props.img}/></a>
                <h3><a href={props.a} target={'_blank'} rel="noreferrer" onPointerDown={swalEcommerce}>{props.titulo}</a></h3>
                <p>{props.desc}</p>
            </ProyectoWrapperTheme>
    )
};

export default Proyecto;