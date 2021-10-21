import axios from 'axios'

export function getMethod(api: string) {
  return axios.get<IFetch>(api)
}
