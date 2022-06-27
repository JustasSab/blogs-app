import Data from '../data.json';
import {FaRegTrashAlt} from 'react-icons/fa';

const BlogList = (handleDeleteBlog) => {
    return (
        <div className="blog-list">
            {Data.map(blog => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <div className="header">
                            <div className="title">
                                <h2>{blog.title}</h2>
                            </div>
                            <div className="author">
                                <p>{blog.author}</p>
                            </div>
                        </div>
                        <div className="body">
                            <div className="text">
                                <p>{blog.text}</p>
                            </div>
                        </div>
                        <div className="footer">
                            <button onClick={handleDeleteBlog}><FaRegTrashAlt/></button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
 
export default BlogList;