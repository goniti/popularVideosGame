import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const Tag = styled.p`
  color: red;
`

export default function MediaCard(data) {
  console.log(data)
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={data.background_image} title={data.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Date de sortie: {data.released}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            catégories:{' '}
            {/*{data.genres.map((tag) => (*/}
            {/*  <Tag key={tag.id}>{tag.name}</Tag>*/}
            {/*))}*/}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Date de sortie: {data.released}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
