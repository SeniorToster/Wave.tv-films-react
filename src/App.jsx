import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ContextProvider } from './Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import './App.scss';
import Movie from './pages/Movie';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <ContextProvider>
          <div className='container'>
            <Header />
            <div className='select-wrapper'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/movie/:idMovieParams' element={<Movie />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </ContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
