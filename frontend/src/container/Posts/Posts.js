import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import PostItem from '../../components/PostItem/PostItem';
import {Link} from "react-router-dom";

const Posts = () => {
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
                {/* {posts.map(post => (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        datetime={post.datetime}
                        image={post.image}
                    />
                ))} */}
            </Grid>
        </Grid>
    )
}

export default Posts;
