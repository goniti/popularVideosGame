import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  display: flex;
`
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Main = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
)

export default Main
