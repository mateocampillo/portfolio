import React, {useState} from 'react';
import './App.css';
import { Cover, Themes } from './Components';
import { ThemeProvider } from 'styled-components';
import { BodyTheme } from './Components/Cover/Cover.elements';
import SwitchMode from './Components/Switch/SwitchMode';

function App() {

  const [theme, setTheme] = useState('dark');

  return (
      <ThemeProvider theme={Themes[theme]}>
        <BodyTheme className="App">
          <Cover />
          <SwitchMode theme ={theme} setTheme={setTheme} />
        </BodyTheme>
      </ThemeProvider>
  );
}

export default App;