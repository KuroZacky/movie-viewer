// External dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './Movie.scss'

const imageUrl = process.env.REACT_APP_IMAGE_URL

interface IProps {
  movie: IMovie
  to: string
}

export default function Movie(props: IProps) {
  const { movie, to } = props

  return (
    <Link to={`/${to}/details/${movie.id}`} className="movie__item">
      <img
        className="movie__image"
        src={`${imageUrl}${movie.poster_path}`}
        alt=""
      />
    </Link>
  )
}
