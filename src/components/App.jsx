import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';

export const App = () => {
  return (
    <div>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />}/>
      {/*<Route path="movies" element={<MoviesPage />} />*/}
    </Route>

  </Routes>
    </div>
  );
};
