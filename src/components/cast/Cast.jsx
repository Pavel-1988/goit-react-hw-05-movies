import {  useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { CastList, CastItem, CastImg, CastInfo } from './Cast.styled'

import defaultImg from '../../default.png'

export default function Cast() {

  const {movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {

     if (!movieId) {
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId }/credits?api_key=bfc78256055c27ed6be30c1c43cfe9c3&language=en-US`
    )
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Nothing found'));
    })
    .then(credit =>{
         setCast(credit.cast)
    })

  }, [movieId])

  return (
    <CastList>
      {cast.map(({id, name, profile_path, character}) => {
        return (
          <CastItem  key={id}>
            <CastImg
              src={profile_path
                ? `https://image.tmdb.org/t/p/w220_and_h330_face${profile_path}`
                : `${defaultImg}`
              }
              alt={name}>
            </CastImg>
            <CastInfo>
              <h4>{name}</h4>
              <p>{character}</p>
            </CastInfo>
          </CastItem>

        )
      })}
    </CastList>
  )

}