import React from 'react';
import { Grid, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import imageNotAvailable from '../../assets/images/no_image.jpg';
import {apiURL} from "../../config";

const PostItem = ({ title, onDelete, id, image, datetime }) => {
    let cardImage = imageNotAvailable;

    if (image) {
      cardImage = apiURL + '/uploads/' + image;
    }

    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card sx={{ height: '100%' , margin: '1rem'}}>
                <CardHeader title={title} />
                <CardMedia
                    image={cardImage}
                    title={title}
                    sx={{ height: 0, paddingTop: '56.25%' }}
                />
                <CardContent>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {datetime}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <IconButton component={Link} to={'/news/' + id}>
                        <ArrowForwardIcon />
                    </IconButton>
                    <IconButton onClick={onDelete}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default PostItem;
