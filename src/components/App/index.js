import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import '../../styles/font.css'

const GlobalStyle = createGlobalStyle`
  body {
		font-family: 'Roboto', sans-serif;
		text-align: center;
	}
`

function App() {
  return (
    <div className="App">
      <Normalize />
      <GlobalStyle />
    </div>
  )
}

export default App
