import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AluraKutStyles } from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
/* Reset CSS (Necolas Reset CSS )*/
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #ABB4BD;
}

  body {
    font-family: sans-serif;
    background-color: #202840;
  }
  
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AluraKutStyles}
  
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
