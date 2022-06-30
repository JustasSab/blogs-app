import { Link } from "react-router-dom";

const BlogList = ({ blogs, catTitle }) => {   // <--- alternative
    // const blogs = props.blogs;             //      props.blogs
    // const catTitle = props.catTitle;       //      props.catTitle
    
    return (
        <div className="blog-list">
            <h2>{catTitle}</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <div className="header">
                        <div className="title">
                            <h2>{blog.title}</h2>
                        </div>
                        <div className="author">
                            <p>{blog.author}</p>
                        </div>
                    </div>
                </Link>

            </div>
            ))}
        </div>
    )
}

export default BlogList;