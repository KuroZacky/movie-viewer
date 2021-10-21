// External dependencies
import React from 'react'

// Internal dependencies
import {
  useAppDispatch,
  setSearchInput,
  selectSearchInput,
  useAppSelector,
} from '../../redux'

// Styles
import './Search.scss'

export default function Search() {
  const dispatch = useAppDispatch()
  const searchInput = useAppSelector(selectSearchInput)

  return (
    <div className="search">
      <h1>The perfect place to find your favorite movie's information!</h1>
      <input
        className="search__input"
        type="text"
        value={searchInput}
        placeholder="Search for a movie..."
        onChange={(e) => dispatch(setSearchInput(e.target.value))}
      />
    </div>
  )
}
