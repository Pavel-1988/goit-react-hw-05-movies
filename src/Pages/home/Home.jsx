import {useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, MovieList, MovieItem, MovieLink  } from './Home.styled';


export function Home() {
  
  
  const [trending, setTrending] = useState([]);

  useEffect(() => {

    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=bfc78256055c27ed6be30c1c43cfe9c3`
    )
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Nothing found'));
      })
        
    .then(movie =>{
        return setTrending(movie.results)
      })
      
    .catch(error => {
          return toast.error(error.message);
      });
    
    },[])
  

  return (
    <Container>
      <h2>Trending movies</h2>
      
        <MovieList>
        {trending.map(({ poster_path, name, title, id })  =>  {
        
        return (
              <MovieItem key={id}>
                <MovieLink  to={`/movies/${id}`} >
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
                        : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
                    }
                    alt={title}
                  />
                  <h4>{name ?? title}</h4>
                </MovieLink>
              </MovieItem>
            )}
          )}
        </MovieList>


      <Outlet/>
    </Container>
  )
}