// External dependencies
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Internal dependencies
import {
  useAppSelector,
  useAppDispatch,
  getSearch,
  getDiscover,
  getTop,
  selectSearchInput,
  selectDiscover,
  selectTop,
  selectSearch,
  selectStatus,
} from './redux'
import Search from './components/Search'
import MoviesContainer from './components/MoviesContainer'
import MovieDetails from './components/MovieDetails'

// Styles
import './App.scss'

function App() {
  const dispatch = useAppDispatch()
  const movies = useAppSelector(selectDiscover)
  const top = useAppSelector(selectTop)
  const search = useAppSelector(selectSearch)
  const searchInput = useAppSelector(selectSearchInput)
  const status = useAppSelector(selectStatus)

  const showMovies = !searchInput ? movies : search
  const titleCopy = !searchInput ? 'Popular movies!' : 'Results of your search:'

  useEffect(() => {
    dispatch(getDiscover('/discover/movie?sort_by=popularity.desc'))
    dispatch(getTop('/movie/top_rated'))
  }, [dispatch])

  useEffect(() => {
    if (searchInput) {
      dispatch(getSearch(`/search/movie?query=${searchInput}`))
    }
  }, [dispatch, searchInput])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="app">
            <Search />
            <MoviesContainer
              isLoading={status === 'loading'}
              title={titleCopy}
              movies={showMovies}
              sectionColor="--primary"
              sectionType="movie"
            />
            <MoviesContainer
              isLoading={false}
              title={'Top rated!'}
              movies={top}
              sectionColor="--secundary"
              sectionType="top"
            />
          </div>
        </Route>
        <Route path="/top/details/:id">
          <MovieDetails></MovieDetails>
        </Route>
        <Route path="/movie/details/:id">
          <MovieDetails></MovieDetails>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
