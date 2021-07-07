import React from 'react'
import { makeStyles, Card, CardContent, CardMedia, Typography, Chip } from '@material-ui/core'
import { CalendarToday as CalendarTodayIcon, Stars as StarsIcon } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    flexBasis: 450,
    marginBottom: 25,
  },
  media: {
    height: 140,
  },
  chip: {
      margin: 2
  },
  typo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight:4
  }
})

export default function MediaCard(data) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={data.data.background_image} title={data.data.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {data.data.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.typo}>
          <CalendarTodayIcon /> Date de sortie: {data.data.released}
        </Typography>


        {data.data.genres.map((tag) => (
          <Chip className={classes.chip} key={tag.id} label={tag.name} />
        ))}


        <Typography variant="body2" color="textSecondary" component="p" className={classes.typo}>
          <StarsIcon /> Classement: {data.data.ratings_count}
        </Typography>
      </CardContent>
    </Card>
  )
}
