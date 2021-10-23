import React, { useState } from "react";
import { Grid, Button, TextField } from '@mui/material';
import {createMessage} from '../../store/actions/messagesActions';
import { useDispatch } from "react-redux";

const CommentsForm = () => {
    const dispatch = useDispatch();
    
    const [comments, setComments] = useState({
        author: "",
        comment: "",
    });

    const submitFormHandler = async (e , messageData) => {
        e.preventDefault();

        try {
            await dispatch(createMessage({ ...comments }));
        } catch (e) {
            console.log('error happened');
        }
    };

    const inputChangeHandler = e => {
        const { name, value } = e.target;

        setComments(prev => ({
            ...prev,
            [name]: value
        }));
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
                    label="Author"
                    name="author"
                    value={comments.author}
                    onChange={inputChangeHandler}
                    sx={{minWidth: '300px'}}
                />
            </Grid>

            <Grid item xs>
                <TextField
                    required
                    multiline
                    rows={3}
                    label="Comment"
                    name="comment"
                    value={comments.comment}
                    onChange={inputChangeHandler}
                    sx={{minWidth: '300px'}}
                />
            </Grid>

            <Grid item xs>
                <Button type="submit" color="primary" variant="contained">Add</Button>
            </Grid>
        </Grid>
    )
}

export default CommentsForm;