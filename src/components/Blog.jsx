import BlogList from './BlogList';
import useFetch from './useFetch';

const Blog = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="blog">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} catTitle="All Blogs"/> }
        </div>
    )
}
export default Blog;