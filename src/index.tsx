import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { store } from './redux'
import { Provider } from 'react-redux'
import App from './App'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'

axios.defaults.params = {}
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
