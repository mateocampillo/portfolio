import React, {useState, Suspense} from 'react';
import './App.css';
import { Cover, Themes, Loading } from './Components';
import { ThemeProvider } from 'styled-components';
import { BodyTheme } from './Components/Cover/Cover.elements';
import SwitchMode from './Components/Switch/SwitchMode';
import i18n from './i18n';
import LocaleContext from './Components/Extras/LocaleContext';

function App() {

  const [theme, setTheme] = useState('light');
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
        <ThemeProvider theme={Themes[theme]}>
          <BodyTheme className="App">
            <Cover />
            <SwitchMode theme ={theme} setTheme={setTheme} />
          </BodyTheme>
        </ThemeProvider>
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;