// External dependencies
import React from 'react'
import { Link, useParams } from 'react-router-dom'

// Internal dependencies
import {
  useAppSelector,
  selectDiscover,
  selectSearch,
  selectTop,
} from '../../redux'

// Styles
import './MovieDetails.scss'

const imageUrl = process.env.REACT_APP_IMAGE_URL

interface IRoute {
  id: string
}

export default function MovieDetails() {
  const { id } = useParams<IRoute>()
  const movies = useAppSelector(selectDiscover)
  const top = useAppSelector(selectTop)
  const search = useAppSelector(selectSearch)

  const selectedMovie = [...movies, ...top, ...search].filter(
    (movie) => `${movie.id}` === id,
  )[0]

  const backgroundConfig = !!selectedMovie.backdrop_path
    ? `no-repeat center/cover url(${imageUrl}${selectedMovie.backdrop_path})`
    : '#000'

  return (
    <div
      className="movie-details"
      style={{
        background: backgroundConfig,
      }}
    >
      <div className="movie-details__header">
        <Link className="movie-details__back" to="/">
          <h1>Go home</h1>
        </Link>
      </div>
      <div className="movies-container__gallery">
        <div className="movie-details__item">
          <img
            className="movie__image"
            src={`${imageUrl}${selectedMovie.poster_path}`}
            alt=""
          />
        </div>
        <div className="movie-details__item">
          <h1>{selectedMovie.original_title}</h1>
          <p>{selectedMovie.overview}</p>
          <p>Popularity: {selectedMovie.popularity}</p>
        </div>
      </div>
    </div>
  )
}
