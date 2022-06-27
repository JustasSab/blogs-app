import React, { useState, useEffect } from 'react';
import {nanoid} from 'nanoid';

function AddBlog(handleAddBlog) {
    const [blogs, setBlogs] = useState([

    ]);
    const [blogText, setBlogText] = useState({
        title: "",
        author: "",
        text: ""
    });

    /*to store or save the data in local storage even after closing the tab*/
    useEffect( () => {
        const savedBlogs = JSON.parse(localStorage.getItem('react-blogs-app-data'))
        if(savedBlogs) {
            setBlogs(savedBlogs)
        }
        }, []);
    
        /*this is for saving the app data in local storage*/
        useEffect( () => {
            localStorage.setItem('react-blogs-app-data', JSON.stringify(blogs));
        }, [blogs]);

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

    const handleChange = event => {
    /*with typing the character limit will change with the input text's length*/
        setBlogText(event.target.value)
    };
    
    const handleSaveClick =() => {
    /*if there's no character in input , then we will not save the note*/
        if(blogText.trim().length > 0){
            handleAddBlog(blogText);
            setBlogText('');
        } 
    };

    return (
        <div className="blog new">
            <form>
            {/*the text area for our input*/}
                <label>Title:</label>
                    <input type="text" value={blogText.title} onChange={handleChange}/><br></br>
                <label>Author:</label>
                    <input type="text" value={blogText.author} onChange={handleChange}/>
                <textarea rows="4" class="textarea" value={blogText.text} onChange={handleChange}></textarea>
                <div className="blog-footer">
                    <input type="submit" value="Submit" onClick={handleSaveClick} onChange={addBlog}></input>
                </div>
            </form>

        </div>
    )
}
 
export default AddBlog;