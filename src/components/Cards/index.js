import Card from '../Card'
import { Grid } from '@material-ui/core';


const Cards = () => {
    return (
        <Grid container spacing={12}>
            <Grid container item xs={12} spacing={3}>
                <Card />
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Card />
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Card />
            </Grid>
        </Grid>
    )
}

export default Cards
