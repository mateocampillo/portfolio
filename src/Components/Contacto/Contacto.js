import React, {useRef} from 'react';
import {
    ContactoContainerTheme,
    ContactoWrapperTheme,
    ContactoDivInsideTheme,
    ContactoIconoLinkedin,
    ContactoH3IconoLinkedin
} from '../Cover/Cover.elements';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

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
            <ContactoWrapperTheme>
                <h2>Contacto</h2>
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
                <ContactoIconoLinkedin href="https://www.linkedin.com/in/mateocampillo/"><ContactoH3IconoLinkedin>O podemos conectar en Linkedin!</ContactoH3IconoLinkedin><i class="devicon-linkedin-plain"></i></ContactoIconoLinkedin>
            </ContactoWrapperTheme>
        </ContactoContainerTheme>
    )
};

export default Contacto;