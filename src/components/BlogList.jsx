import Blog from './Blog';

const BlogList = ({blogs, handleAddBlog, handleDelete}) => {
    return (
        <div className="blog-list">
            
            {blogs?.map((blog) => 
                <Blog id={blog.id} title={blog.title} author={blog.author} text={blog.text}
                    handleDelete={handleDelete}
                />
            )}
            
        </div>
    )
}

export default BlogList;