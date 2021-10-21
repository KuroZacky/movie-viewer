interface IFetch {
  isLoading: boolean
  error: object
  results: Array<IMovie>
}

interface IMovie {
  id: string
  original_title: string
  overview: string
  poster_path: string
  popularity: number
  backdrop_path: string
}
