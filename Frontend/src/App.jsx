import React from 'react';
import Home from "./home/Home1";
import Signup from "../src/components/Signup"
import {Route,Routes } from "react-router-dom";
import Contact from "../src/components/Contact"
import Courses from './courses/Courses';
function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
       < Route path="/" element={<Home/> }/>
       < Route path="/course" element={<Courses/> }/>
       < Route path="/signup" element={<Signup/> }/>
       < Route path="/contact" element={<Contact/> }/>
      </Routes>
    </div>
    </>
  )
}

export default App