import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import { store } from './app/store/store.js'
import App from './app/index.jsx'
import './app/index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
