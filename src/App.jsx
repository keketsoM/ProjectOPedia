import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Home from "./Pages/Home";
import TopicsCovered from "./Pages/TopicsCovered";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Footer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/topiccovered" element={<TopicsCovered />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
