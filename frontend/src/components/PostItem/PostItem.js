import React from 'react';
import { Grid, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import ArrowForwardIcon from "@mui/icons/ArrowForward";

const PostItem = ({title, description, id, image , datetime}) => {
    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.card}>
                <CardHeader title={title} />
                <CardMedia
                    image={cardImage}
                    title={title}
                    sx={{height: 0, paddingTop: '56.25%'}}
                />
                <CardContent>
                    <Typography variant="subtitle1">
                        {price} KGS
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton component={Link} to={'/posts/' + id}>
                        <ArrowForwardIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default PostItem;
