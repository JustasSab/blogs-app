import AddBlog from "./AddBlog";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blogs</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create"><AddBlog/></a>
            </div>
        </nav>
     );
}
 
export default Navbar;