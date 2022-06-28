import React, { useState, useEffect } from 'react';
import {Routes, Route } from "react-router-dom";
import {nanoid} from 'nanoid';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import AddBlog from './components/AddBlog';

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: nanoid(),
      title: "My new website",
      author: "Mario",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: nanoid(),
      title: "Upcoming events",
      author: "Josh",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      id: nanoid(),
      title: "Hello World!",
      author: "Josh",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      id: nanoid(),
      title: "React projects",
      author: "Josh",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ]);
  /*this is for saving the app data in local storage*/
  useEffect( () => {
    localStorage.setItem('blogs_app', JSON.stringify(blogs))
  }, [blogs]);

  /*to store or save the data in local storage even after closing the tab*/
  useEffect( () => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs_app'))
    if(savedBlogs) {
      setBlogs(savedBlogs)
    }
  }, []);

  const addBlog = (title, author, text) => {
    const newBlog = {
      id: nanoid(),
      title: title,
      author: author,
      text: text
  }
  const newBlogs = [...blogs, newBlog]
    setBlogs(newBlogs)
  };

  /*this function is for deleting blogs with a id*/
  const deletingBlog = (id) =>{
    const newBlogs = blogs.filter((blog)=> blog.id!==id);
    setBlogs(newBlogs)
  };

  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<BlogList blogs={blogs.filter((blog)=>blog.text.toLowerCase())} handleAddBlog={addBlog} handleDelete={deletingBlog} />}/>
            <Route path="/create" element={<AddBlog handleAddBlog={addBlog}/>}/>
          </Routes>
        </div>
      </div>
  );
};

export default App;
