import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

import { Container, StyledLink  } from '../layout/Layout.styled'
import{MovieBox, MovieImg, MovieInfo, AdditionalDiv } from './MovieDetails.styled'

export const MovieDetails = () => {

  const {movieId} = useParams();
  const [movie, setMovie] = useState([]);

  const location = useLocation();
  const backLink = location.state?.from ?? '/';



  useEffect(() => {

     if (!movieId) {
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bfc78256055c27ed6be30c1c43cfe9c3&language=en-US`
    )
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Nothing found'));
      })
       
    .then(movie =>{
         setMovie([movie])
      })

  }, [movieId])
  
  return (
  <>
  
      {movie && (
        <Container>
          {movie.map(({ release_date, poster_path, title, name, overview, vote_average, genres, id }) => {
           
            const releaseYear = new Date(release_date).getFullYear();
            const genre = genres
                .map(({ name }) => {
                  return name;
                })
                .join(' ').toLowerCase();
            return (
              <div key={id}>
                <StyledLink  to={backLink}>Back</StyledLink>
                <MovieBox >
                   <MovieImg
                    src={poster_path
                      ? `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
                      : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
                    }
                    alt={title ?? name}>
                  </MovieImg>
                  <MovieInfo>
                    <h2> {name ?? title} ({releaseYear})</h2>
                    <p> User score:{' '} {vote_average}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Geners</h3>
                    <p>{genre}</p>
                  </MovieInfo>
              
               

                </MovieBox>
               

                <AdditionalDiv>
                  <h3>Additional information</h3>
                   <ul>
                      <li>
                        <StyledLink state={{ from: backLink }} to="cast">
                          Cast
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink state={{ from: backLink }} to="reviews">
                          Reviews
                        </StyledLink>
                      </li>
                    </ul>
                  </AdditionalDiv>

              </div>
              

            )
          }
          )}
        </Container>
      )}
      <Outlet />
  </>
  )
}