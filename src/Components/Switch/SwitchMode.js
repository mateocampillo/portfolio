import React from 'react';
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import {
    SwitchModeContainer,
    SwitchModeButton
} from '../Cover/Cover.elements';

function SwitchMode(props) {

    const changeMode = () => {
        if(props.theme === 'dark'){
            props.setTheme('light');
        } else {
            props.setTheme('dark');
        }
    }

    let iconoMode = props.theme === 'dark' ? <MdLightMode/> : <MdOutlineDarkMode/>;

    return (
        <SwitchModeContainer>
            <div>
                <SwitchModeButton onClick={ () => changeMode()}>{iconoMode}</SwitchModeButton>
            </div>
        </SwitchModeContainer>
    );
}
    
export default SwitchMode; 