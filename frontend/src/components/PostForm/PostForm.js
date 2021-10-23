import React, {useState} from "react";
import { Grid , Button , TextField} from '@mui/material';

const PostForm = ({onSubmit}) => {
    return (
        <Grid
            container
            direction="column"
            spacing={2}
            component="form"
            className={classes.root}
            autoComplete="off"
            onSubmit={submitFormHandler}
        >
            <Grid item xs>
                <TextField
                    required
                    label="Title"
                    name="title"
                    value={state.title}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <TextField
                    required
                    multiline
                    rows={3}
                    label="Description"
                    name="description"
                    value={state.description}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <FileInput
                    label="Image"
                    name="image"
                    onChange={fileChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <Button type="submit" color="primary" variant="contained">Save</Button>
            </Grid>
        </Grid>
    )
}

export default PostForm
