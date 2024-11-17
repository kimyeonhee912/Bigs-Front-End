import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PostCreatePage from "./pages/Post/PostCreatePage";
import { HomeHeader } from "./components/Home/HomeHeader";
import { HomeFooter } from "./components/Home/HomeFooter";
import { HomeMain } from "./components/Home/HomeMain";

function App() {
  return (
    <Router>
      <div className="App">
        <HomeHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-post" element={<PostCreatePage />} />
        </Routes>
        <HomeFooter />
      </div>
    </Router>
  );
}

export default App;
