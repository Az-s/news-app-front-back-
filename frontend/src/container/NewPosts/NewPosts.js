import React from "react";
import { Typography } from '@mui/material';
import PostForm from "../../components/PostForm/PostForm";

const NewPosts = ({ onSubmit }) => {
    return (
        <>
            <Typography variant="h4">New post</Typography>
            <PostForm onSubmit={onSubmit} />
        </>
    )
}

export default NewPosts;
