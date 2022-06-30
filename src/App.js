import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import AddBlog from './components/AddBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes >
          <Route path={'/'} element={<Blog />} />
          <Route path={'/create'} element={<AddBlog />} />
          <Route path={'/blogs/:id'} element={<BlogDetails />} />
          <Route path={'*'} element={<NotFound />}/>  {/* "*" means all other urls */}   
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
