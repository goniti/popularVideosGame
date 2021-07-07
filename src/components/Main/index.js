import React from 'react'
import Box from '@material-ui/core/Box'

const Main = ({ children }) => (
  <Box component="main" width="100%" display="flex" flexWrap="wrap" justifyContent="space-around">
    {children}
  </Box>
)

export default Main
