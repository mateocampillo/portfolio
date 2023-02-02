import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import Header from '../Header/Header';
import MainProyectos from '../Proyectos/MainProyectos';
import { HrTheme } from './Cover.elements';

function Cover() {

    return (
        <>
            <Header />
            <MainContainer />
            <HrTheme/>
            <MainProyectos />
            <HrTheme/>
        </>
    );
};
export default Cover;