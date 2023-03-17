import Proyecto from './Proyecto';
import {
    MainProyectosContainerTheme,
    MainProyectosWrapperTheme,
    MainProyectoTituloH2Theme
} from '../Cover/Cover.elements';
import DividerCloud from '../Extras/DividerCloud';
import { useTranslation } from 'react-i18next';

function MainProyectos() {

    const {t} = useTranslation();

    return (
        <MainProyectosContainerTheme id='Proyectos'>
            <DividerCloud />
            <div>
                <MainProyectoTituloH2Theme>{t('Proyectos.titulo')}</MainProyectoTituloH2Theme>
            </div>
            <MainProyectosWrapperTheme>
                <Proyecto img='/img/infoRadiant_frame.png' titulo={t('Proyectos.infoRadiant.titulo')} a='https://info-radiant.vercel.app/' desc={t('Proyectos.infoRadiant.desc')}/>
                <Proyecto img='/img/working_frame.png' titulo={t('Proyectos.ecommerce.titulo')} a='#' desc={t('Proyectos.ecommerce.desc')}/>
            </MainProyectosWrapperTheme>
        </MainProyectosContainerTheme>
    )
};

export default MainProyectos;