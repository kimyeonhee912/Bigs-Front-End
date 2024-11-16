import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PostCreatePage from "./pages/Post/PostCreatePage";
import { HomeHeader } from "./components/Home/HomeHeader";
import { HomeFooter } from "./components/Home/HomeFooter";

function App() {
  return (
    <div className="App">
      <HomeHeader />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-post" element={<PostCreatePage />} />
        </Routes>
      </Router>
      <HomeFooter />
    </div>
  );
}

export default App;
