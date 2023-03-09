import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import Header from '../Header/Header';
import MainProyectos from '../Proyectos/MainProyectos';
import { HrTheme } from './Cover.elements';
import Contacto from '../Contacto/Contacto';
import Footer from '../Footer/Footer';

function Cover() {

    return (
        <>
            <Header />
            <MainContainer />
            <MainProyectos />
            <Contacto />
            <HrTheme/>
            <Footer />
        </>
    );
};
export default Cover;