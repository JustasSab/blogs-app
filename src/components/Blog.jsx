import {MdDeleteForever} from 'react-icons/md';

function Blog({id, title, author, text, handleDelete}) {
    return (
        <div className="blog">
        {/*This part will contain the main note's text part*/}
            <div className="blog-preview">
                <div className="header">
                    <div className="title">
                        <h2>{title}</h2>
                    </div>
                    <div className="author">
                        <p>{author}</p>
                    </div>
                </div>
                <div className="body">
                    <div className="text">
                        <p>{text}</p>
                    </div>
                </div>
                <div className="footer">
                <MdDeleteForever onClick={()=>handleDelete(id)} className="delete-icon" size="1.3em" />
                </div>
            </div>
        </div>
    )
}
export default Blog;