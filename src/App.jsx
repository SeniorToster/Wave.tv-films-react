import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ContextProvider } from './Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import WatchPage from './pages/Watch';
import FavoritesPage from './pages/Favorites';
import MoviePage from './pages/Movie';
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
      <BrowserRouter>
        <ContextProvider>
          <div className='container'>
            <Header />
            <div className='select-wrapper'>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
                <Route path='/film/:idMovieParams' element={<MoviePage />} />
                <Route path='/watch/:idMovieParams' element={<WatchPage />} />
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
