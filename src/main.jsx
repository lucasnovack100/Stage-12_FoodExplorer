import React from 'react'
import ReactDOM from 'react-dom/client'
import {NewPlate} from './pages/NewPlate'

import  GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <NewPlate />
    </ThemeProvider>
  </React.StrictMode>,
)
