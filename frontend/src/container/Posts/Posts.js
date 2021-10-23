import React , { useEffect } from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import PostItem from '../../components/PostItem/PostItem';
import { fetchMessages } from '../../store/actions/messagesActions';

const Posts = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);

    useEffect(() => {
        setInterval(() => {
            dispatch(fetchMessages());
          }, 1000);
    }, [dispatch]);

    return (
        <Grid container justifyContent='center' mt={3}>
            <Grid item container justifyContent="space-around" alignItems="center" mb={4}>
                <Grid item>
                    <Typography variant="h4">Posts</Typography>
                </Grid>
                <Grid item>
                    <Button color="primary" component={Link} to="/posts/new">Add new post</Button>
                </Grid>
            </Grid>

            <Grid item container direction="row" spacing={1}>
                {/* {news.map(n => (
                    <PostItem
                        key={n.id}
                        id={n.id}
                        title={n.title}
                        description={n.description}
                        datetime={n.datetime}
                        image={n.image}
                    />
                ))} */}
            </Grid>
        </Grid>
    )
}

export default Posts;
