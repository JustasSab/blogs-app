import { Link } from "react-router-dom";

const BlogList = ({ blogs, catTitle }) => {  // <-- Alternative - const blogs = props.blogs; AND const catTitle = props.catTitle; From Blog.jsx
    return (
        <div className="blog-list">
            <h2>{catTitle}</h2>
            {/* map() method used to traverse and display a list of similar objects of a component */}
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