import React from 'react'
import ReactDOM from 'react-dom/client'
import {Plate} from './pages/Plate'

import  GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <Plate />
    </ThemeProvider>
  </React.StrictMode>,
)
