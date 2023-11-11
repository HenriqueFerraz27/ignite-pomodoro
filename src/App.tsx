import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <h1>Ignite Pomodoro</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
