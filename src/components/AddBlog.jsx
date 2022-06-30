import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function AddBlog() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState();
    const [text, setText] = useState('');
    const [isPending, setIsPending] = useState(false);  //this useState hook replaces the button while the data is being uploaded

    const redirect = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault();
        const blog = {title, author, text};

        setIsPending(true);   //shows {isPending && <button disabled>Adding Blog...</button>}                          

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)  //this method converts a JavaScript object or value to a JSON string
        }).then (() => {
            setIsPending(false)
            console.log("New Blog Added");
            redirect('/');
        }) 
    };

    return (
        <div className="create">
            <form onSubmit = {handleSumbit}>
                <label>Title:</label>
                <input 
                    type="text" 
                    name="title" 
                    required
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}  //We can use the useState Hook to keep track of each inputs value
                />
                <label>Author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value=""></option>
                        <option value="Bob">Bob</option>
                        <option value="Josh">Josh</option>
                        <option value="Justas">Justas</option>
                    </select>
                <label>Blog text:</label>
                <textarea 
                    type="text" 
                    name="text" 
                    required
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