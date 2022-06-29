import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function AddBlog() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState();
    const [text, setText] = useState('');
    const [isPending, setIsPending] = useState(false);
    const redirect = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault();
        const blog = {title, author, text};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then (() => {
            setIsPending(false)
            console.log("New Blog Added");
            redirect('/');
        }) 
    };

    return (
        <div className="create">
            <form onSubmit={handleSumbit}>
                <label>Title:</label>
                <input 
                    type="text" 
                    required
                    name="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                /><br></br>
                <label>Author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value=""></option>
                        <option value="Mario">Mario</option>
                        <option value="Josh">Josh</option>
                        <option value="Justas">Justas</option>
                    </select>
                <label>Blog text:</label>
                <textarea 
                    type="text" 
                    name="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    >
                </textarea>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>

        </div>
    );
}
 
export default AddBlog;