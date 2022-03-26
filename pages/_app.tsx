import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { themeOptions } from '../styles/muiTheme'
import theme from '../styles/theme'
import Globals from '../styles/Globals'
import type { AppProps } from 'next/app'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={themeOptions}>
        <Provider store={store}>
          <Component {...pageProps} />
          <Globals />
        </Provider>
      </MuiThemeProvider>
    </ThemeProvider>
  )
}

export default MyApp
