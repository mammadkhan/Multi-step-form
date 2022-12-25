import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/App'
import './styles/index.scss'
import { store } from './state/store'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
