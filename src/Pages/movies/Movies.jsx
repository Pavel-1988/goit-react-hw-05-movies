import { useState, useEffect, Suspense } from 'react';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container,MovieList, MovieItem, MovieLink } from '../home/Home.styled';
import { Input } from './Movies.styled';


export default function Movies() {

  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('query')?? '')
  const query = searchParams.get('query') ?? '';



  const onFormSubmit = e => {
    e.preventDefault();
      if (value === '') {
        return alert(
          'Enter your serch query'
        )
    }
      setSearchParams({ query:value})

  };


  useEffect(() => {
     if (!query) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=bfc78256055c27ed6be30c1c43cfe9c3&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(new Error('Change your serch query'))
      })
      .then(movie => {
        if (movie.results === 0) {
          return alert(
            'Something went wrong. Try changing your search query'
          );
        }
        return setMovies([...movie.results]);
      })
    .catch(error => {
        return alert(error.message);
      });
  }, [query])
  
  

  const handleInputChange = e => {
    setValue (e.target.value)
  }

  return (
    <Container>
      <form  onSubmit={onFormSubmit} >
       <Input
          value={value}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button >Search</button>
      </form>
      <MovieList>
        {movies.map(
          ({ poster_path, id, title, name, release_date, first_air_date }) => {
            const date = new Date(release_date).getFullYear();
            const date2 = new Date(first_air_date).getFullYear();
            return (
              <MovieItem key={id}>
                <MovieLink  to={`${id}`} state={{ from: location }}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
                        : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
                    }
                    alt={title ?? name}
                  ></img>
                  <h4>
                    {name ?? title} ({date || date2})
                  </h4>
                </MovieLink>
              </MovieItem>
            );
          }
        )}
      </MovieList>
       <Suspense><Outlet/></Suspense>
    </Container>

  )
  
}