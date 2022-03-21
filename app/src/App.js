import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Whiteboard from "./pages/Whiteboard";
import Calculator from "./pages/Calculator";
import SchoolReviews from "./pages/Schoolreviews";
import CreateReview from './resources/CreateReview';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/whiteboard" element={<Whiteboard />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/schoolreviews" element={<SchoolReviews/>}/>
            <Route path="/makereview" element={<CreateReview/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


