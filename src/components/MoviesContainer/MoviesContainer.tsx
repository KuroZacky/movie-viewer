// External dependencies
import React from 'react'

// Internal dependencies
import Movie from '../Movie'

// Styles
import './MoviesContainer.scss'

interface IProps {
  title: string
  isLoading: boolean
  movies: Array<IMovie>
  sectionColor: string
  sectionType: string
}

export default function MoviesContainer(props: IProps) {
  const { title, isLoading, movies, sectionColor, sectionType } = props || []

  return (
    <div
      className="movies-container"
      style={{ background: `var(${sectionColor})` }}
    >
      <div>
        <h1>{title}</h1>
      </div>
      <div className="movies-container__gallery">
        {!isLoading &&
          movies.length > 0 &&
          movies.map((movie, i) => (
            <Movie to={sectionType} key={i} movie={movie} />
          ))}
        {movies.length === 0 && !isLoading && (
          <h2 className="movies-container__messages">
            There are no results for this search :(
          </h2>
        )}
        {isLoading && (
          <h1 className="movies-container__messages">Loading...</h1>
        )}
      </div>
    </div>
  )
}
