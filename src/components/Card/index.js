import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const Tag = styled.p`
  color: #800080;
`
const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(data) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={data.data.background_image} title={data.data.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Date de sortie: {data.data.released}
          </Typography>
         
            { data.data.genres.map((tag) => (
             <Tag key={tag.id}>{tag.name}</Tag>
            ))
            }
                <Typography variant="body2" color="textSecondary" component="p">
            Classement: {data.data.released}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
