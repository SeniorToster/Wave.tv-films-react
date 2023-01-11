import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ContextProvider } from './Context/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import WatchPage from './pages/Watch';
import FavoritesPage from './pages/Favorites';
import MoviePage from './pages/Movie';
import Not404Page from './pages/Not404';
import ActorPage from './pages/Actor';

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
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/film/:idMovieParams' element={<MoviePage />} />
            <Route path='/name/:idActorParams' element={<ActorPage />} />
            <Route path='/watch/:idMovieParams' element={<WatchPage />} />
            <Route path='/*' element={<Not404Page />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
