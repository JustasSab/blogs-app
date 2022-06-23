import Navbar from './components/Navbar';
import BlogList from './components/BlogList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <BlogList />
      </div>
    </div>
  );
}

export default App;
