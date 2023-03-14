import Home from "./page/Home";
import Post from "./page/Post";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:postId" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
