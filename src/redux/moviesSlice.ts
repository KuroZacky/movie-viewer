import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './'
import { getMethod } from './moviesAPI'

export interface MoviesState {
  discover: IMovie[]
  top: IMovie[]
  search: IMovie[]
  searchInput: string
  status: 'idle' | 'loading' | 'failed'
}

const initialState: MoviesState = {
  discover: [],
  top: [],
  search: [],
  searchInput: '',
  status: 'idle',
}

export const getDiscover = createAsyncThunk(
  'movies/getDiscover',
  async (api: string) => {
    const response = await getMethod(api)
    return response.data.results
  },
)

export const getTop = createAsyncThunk('movies/getTop', async (api: string) => {
  const response = await getMethod(api)
  return response.data.results
})

export const getSearch = createAsyncThunk(
  'movies/getSearch',
  async (api: string) => {
    const response = await getMethod(api)
    return response.data.results
  },
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDiscover.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getDiscover.fulfilled, (state, action) => {
        state.status = 'idle'
        state.discover = action.payload
      })
      .addCase(getTop.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getTop.fulfilled, (state, action) => {
        state.status = 'idle'
        state.top = action.payload
      })
      .addCase(getSearch.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        state.status = 'idle'
        state.search = action.payload
      })
  },
})

export const { setSearchInput } = moviesSlice.actions

export const selectDiscover = (state: RootState) => state.movies.discover
export const selectTop = (state: RootState) => state.movies.top
export const selectSearch = (state: RootState) => state.movies.search
export const selectSearchInput = (state: RootState) => state.movies.searchInput
export const selectStatus = (state: RootState) => state.movies.status

export default moviesSlice.reducer
