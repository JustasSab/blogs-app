import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import AddBlog from './components/AddBlog';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/create" element={<AddBlog />} />
          </Routes>

        </div>
      </div>
  );
}

export default App;
