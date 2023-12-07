import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'preline'
import Root from './layout/Root.jsx'

import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <ParallaxProvider>

        <Root></Root>

    </ParallaxProvider>

  </React.StrictMode>,
)
