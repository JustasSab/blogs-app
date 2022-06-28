import React, { useState } from 'react';

function AddBlog(handleAddBlog) {
    const initialValues = { 
        title: '',
        author: '',
        text: ''
    };

    const [blogText, setBlogText] = useState(initialValues);

    const handleChange = event => {
    /*with typing the character limit will change with the input text's length*/
        setBlogText( prevValues => {
            return {...prevValues, [event.target.name]: event.target.value}
        })
    };
    
    const handleSaveClick =() => {
    /*if there's no character in input, then we will not save the blog*/
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
                    <input type="text" name="title" value={blogText.title} onChange={handleChange}/><br></br>
                <label>Author:</label>
                    <input type="text" name="author" value={blogText.author} onChange={handleChange}/>
                <textarea type="text" name="text" rows="4" className="textarea" value={blogText.text} onChange={handleChange}></textarea>
                <div className="blog-footer">
                    <input type="submit" value="Submit" onClick={handleSaveClick}></input>
                </div>
            </form>

        </div>
    );
}
 
export default AddBlog;