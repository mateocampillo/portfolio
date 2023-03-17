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
import { useTranslation } from 'react-i18next';

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

    const {t} = useTranslation();

    return (
        <ContactoContainerTheme id='Contacto'>
            <DividerTilt />
            <ContactoWrapperTheme>
                <h2>{t('Contacto.titulo')}</h2>
                <ContactoColumnas>
                    <ContactoColumnasPrimera>
                        <p>{t('Contacto.textoLargo.parrafoN1')}</p>
                        <p>{t('Contacto.textoLargo.parrafoN2')}</p>
                        <p>{t('Contacto.textoLargo.parrafoN3')}</p>
                    </ContactoColumnasPrimera>
                    <div>
                        <h3>{t('Contacto.formulario.titulo')}</h3>
                        <form ref={form} onSubmit={sendEmail}>
                            <ContactoDivInsideTheme>
                                <label>{t('Contacto.formulario.labels.nombre')}</label>
                                <input type='text' name="user_name" required></input>
                            </ContactoDivInsideTheme>
                            <ContactoDivInsideTheme>
                                <label>{t('Contacto.formulario.labels.email')}</label>
                                <input type='email' name="user_email" required></input>
                            </ContactoDivInsideTheme>
                            <ContactoDivInsideTheme>
                                <label>{t('Contacto.formulario.labels.mensaje')}</label>
                                <textarea rows={5} name="message" required></textarea>
                            </ContactoDivInsideTheme>
                            <ContactoDivInsideTheme>
                                <button id='buttonSubmitContacto' type='submit' value="Send" >{t('Contacto.formulario.labels.submit')}</button>
                            </ContactoDivInsideTheme>
                        </form>
                    </div>
                </ContactoColumnas>
                <ContactoIconoLinkedin href="https://www.linkedin.com/in/mateocampillo/"><ContactoH3IconoLinkedin>{t('Contacto.formulario.linkedIn')}</ContactoH3IconoLinkedin><i className="devicon-linkedin-plain"></i></ContactoIconoLinkedin>
            </ContactoWrapperTheme>
        </ContactoContainerTheme>
    )
};

export default Contacto;