import { Route, Routes } from "react-router-dom";
import Blog from "./page/Blog";
import House from "./page/Home";
import BlogId from "./page/BlogId";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<House />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogId />} />
      </Routes>
    </div>
  );
}

export default App;
