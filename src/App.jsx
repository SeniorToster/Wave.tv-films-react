import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ContextProvider } from './Context';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.scss';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ContextProvider>
        <div className='container'>
          <Header />
          <Main />
          <Footer />
        </div>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
