import React, {useRef} from 'react';
import {
    ContactoContainerTheme,
    ContactoWrapperTheme,
    ContactoDivInsideTheme,
    ContactoIconoLinkedin,
    ContactoH3IconoLinkedin,
    ContactoColumnas,
    ContactoColumnasPrimera
} from '../Cover/Cover.elements';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import DividerTilt from '../Extras/DividerTilt';

function Contacto() {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('contact_service', 'contact_form', form.current, 'AEwW306LNkaU8JGZH')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Exito',
                    text: 'Email enviado.'
                  })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Existe un error! Prueba a contactarme por linkedin.'
                  })
            });
        }

    return (
        <ContactoContainerTheme id='Contacto'>
            <DividerTilt />
            <ContactoWrapperTheme>
                <h2>Contacto</h2>
                <ContactoColumnas>
                    <ContactoColumnasPrimera>
                        <p>Si te ha gustado mi trabajo y estás buscando un profesional capacitado para unirte a tu equipo, no dudes en contactarme.</p>
                        <p>Estoy ansioso por discutir cómo mi experiencia y habilidades pueden contribuir al éxito de tu proyecto o empresa.</p>
                        <p>¡No esperes más para contactarme y juntos lograremos grandes cosas!</p>
                    </ContactoColumnasPrimera>
                    <div>
                        <h3>Dejame un mensaje!</h3>
                        <form ref={form} onSubmit={sendEmail}>
                            <ContactoDivInsideTheme>
                                <label>Nombre y apellido</label>
                                <input type='text' name="user_name" required></input>
                            </ContactoDivInsideTheme>
                            <ContactoDivInsideTheme>
                                <label>Email</label>
                                <input type='email' name="user_email" required></input>
                            </ContactoDivInsideTheme>
                            <ContactoDivInsideTheme>
                                <label>Mensaje</label>
                                <textarea rows={5} name="message" required></textarea>
                            </ContactoDivInsideTheme>
                            <ContactoDivInsideTheme>
                                <button id='buttonSubmitContacto' type='submit' value="Send" >Enviar</button>
                            </ContactoDivInsideTheme>
                        </form>
                    </div>
                </ContactoColumnas>
                <ContactoIconoLinkedin href="https://www.linkedin.com/in/mateocampillo/"><ContactoH3IconoLinkedin>O podemos conectar en Linkedin!</ContactoH3IconoLinkedin><i className="devicon-linkedin-plain"></i></ContactoIconoLinkedin>
            </ContactoWrapperTheme>
        </ContactoContainerTheme>
    )
};

export default Contacto;