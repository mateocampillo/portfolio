import React from 'react';
import {
    FooterContainerTheme
} from '../Cover/Cover.elements';
import { useTranslation } from 'react-i18next';

function Footer() {

    const {t} = useTranslation();

    return (
        <FooterContainerTheme>
            <h2>{t('Footer')}</h2>
        </FooterContainerTheme>
    )
}

export default Footer;