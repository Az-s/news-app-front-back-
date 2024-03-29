import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense" sx={{justifyContent: 'center'}}>
                    <Typography variant="h6" color="inherit"  component={Link} to={'/'} sx={{textDecoration: 'none'}}>
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;