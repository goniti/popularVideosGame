import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { Pagination } from '@material-ui/lab'
import { Box } from '@material-ui/core'

import Header from '../Header'
import Loader from '../Loader'
import Card from '../Card'
import Main from '../Main'
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
  const [currentPage, setCurrentPage] = useState(1)
  const pageCount = Math.ceil(dataGame.count / 20)
  const dataIsLoad = dataGame.length !== 0

  const handleChangePage = (event) => {
    let target = parseInt(event.target.textContent)
    setCurrentPage(target)
    setLoading(false)
  }

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=2020-01-01,2020-12-31&platforms=18,1,7&page=${currentPage}`,
    )
      .then((response) => response.json())
      .then((json) => {
        setDataGame(json)
        setError(false)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(true)
      })
  }, [currentPage])

  if (loading && dataGame.length === 0) return <Loader />
  if (error) return <span>Error while loading data...</span>

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Normalize />
      <GlobalStyle />
      <Header />
      <Pagination count={pageCount} page={currentPage} onChange={handleChangePage} />
      <Main>
        {dataIsLoad &&
          dataGame.results.map((result) => {
            return <Card key={result.id} data={result} />
          })}
      </Main>
    </Box>
  )
}

export default App
