import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { Movies } from '../pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='movies' element={<Movies />} />
          {/*<Route path='movies/:movieId' element={<MoviePageDetails />}>*/}
          {/*  <Route path='cast' element={<Cast />} />*/}
          {/*  <Route path='reviews' element={<Reviews />} />*/}
          {/*</Route>*/}
        </Route>

      </Routes>
    </div>
  );
};
