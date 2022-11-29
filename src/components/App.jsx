import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/home/Home'
import { Movies } from '../Pages/movies/Movies'


import { Layout } from './layout/Layout'
import {MovieDetails} from './movieDetails/MovieDetails'
import { Cast } from './cast/Cast'
import {Reviews} from './reviews/Reviews'

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
      </Route >    
    </Routes>
    </div>
    
  );
};


// const API_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '70a1ccf907025a1a646b674d3a53bd64';