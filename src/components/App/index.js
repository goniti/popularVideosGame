import {useEffect, useState} from "react";
import {createGlobalStyle} from 'styled-components'
import {Normalize} from 'styled-normalize'
import '../../styles/font.css'

const GlobalStyle = createGlobalStyle`
  body {
		font-family: 'Roboto', sans-serif;
		text-align: center;
	}
`

function App() {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [dataGame, setDataGame] = useState([])

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=2020-01-01,2020-12-31`)
            .then(response => response.json())
            .then(json => {
                setDataGame(json)
                setError(false)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(true)
            })
    }, [])

    if (loading && dataGame.length === 0) return <span>Loading...</span>
    if (error) return <span>Error while loading data...</span>
    console.log("dataGame", dataGame)
  return (
    <div className="App">
      <Normalize />
      <GlobalStyle />
    </div>
  )
}

export default App
