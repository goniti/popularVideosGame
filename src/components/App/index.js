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
    console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <Normalize />
      <GlobalStyle />
    </div>
  )
}

export default App
