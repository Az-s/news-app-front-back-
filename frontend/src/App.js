import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar/NavBar';
import Posts from './container/Posts/Posts';
import NewPosts from './container/NewPosts/NewPosts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <NavBar />
        <Route path="/" exact component={Posts} />
        <Route path="/posts/new" component={NewPosts} />
        <Route path="/posts/:id" component={Post} />
      </Router>
    </div>
  );
}

export default App;
