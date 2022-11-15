import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/home/Home'
import { Movies } from '../Pages/movies/Movies'

import {Layout} from './Layout/Layout'


export const App = () => {
  return (
    <div>

      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
      </Route >
      
    </Routes>

    </div>
    
  );
};


// const API_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '70a1ccf907025a1a646b674d3a53bd64';