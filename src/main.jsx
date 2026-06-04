import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ThemeContextProvider } from './context/ThemeContext' 
import { Provider } from 'react-redux'
import store  from './store/store'
import './index.css'
import App from './App.jsx'
import {Toaster} from'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
       
          <ThemeContextProvider>
            
        <App />
        <Toaster position="top-right" />
        </ThemeContextProvider>
        
    </Provider>
  </BrowserRouter>
)