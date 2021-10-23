import React from 'react';

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
        </Grid>
    )
}

export default Posts;
