import React, { useState } from "react";
import { Grid, Button, TextField } from '@mui/material';
import FileInput from '../FileInput/FileInput';

const PostForm = ({ onSubmit }) => {
    const [state, setState] = useState({
        title: "",
        description: "",
        image: null,
    });

    const submitFormHandler = e => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });

        onSubmit(formData);
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return { ...prevState, [name]: value };
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setState(prevState => {
            return { ...prevState, [name]: file }
        });
    };

    return (
        <Grid
            container
            direction="column"
            spacing={2}
            component="form"
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
                    sx={{minWidth: '400px'}}
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
                    sx={{minWidth: '400px'}}
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

export default PostForm;