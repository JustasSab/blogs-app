import BlogList from './BlogList';
import useFetch from './useFetch';

const Blog = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
            //data: as blogs
            //isPending: print "Loading..." while Data is loading
    return (
        <div className="blog">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} catTitle="All Blogs"/> } {/* passing blogs and catTitle to BlogList component */}
        </div>
    )
}
export default Blog;