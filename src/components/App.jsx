import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { Home } from '../Pages/home/Home'
import { Layout } from './layout/Layout'

// import { Movies } from '../Pages/movies/Movies'
// import {MovieDetails} from './movieDetails/MovieDetails'
// import { Cast } from './cast/Cast'
// import { Reviews } from './reviews/Reviews'

const Movies = lazy(() => import('../Pages/movies/Movies'));
const MovieDetails = lazy(() => import('./movieDetails/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route >    
      </Routes>
    </div>
  );
};


// const API_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '70a1ccf907025a1a646b674d3a53bd64';