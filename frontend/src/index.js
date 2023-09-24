import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routing } from './routes/Routing'
import './assets/App.css'

import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Routing />
        </Provider>
    </React.StrictMode>,
)
