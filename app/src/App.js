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
import Footer from "./pages/Footer";

export default function App() {
  return (
<<<<<<< HEAD
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
      <Footer></Footer>
    </BrowserRouter>
=======
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
>>>>>>> 46b4465383896be11d305b09292545a8f2e78bac
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


