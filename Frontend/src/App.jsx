import React from 'react';
import Home from "./home/Home1";
import Signup from "../src/components/Signup"
import {Navigate,Route,Routes } from "react-router-dom";
import Contact from "../src/components/Contact"
import Courses from './courses/Courses';
import About from '../src/components/About'
import toast, { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider"
import AdminDashboard from "./admin/AdminDashboard";

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
       < Route path="/" element={<Home/> }/>
       < Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
       < Route path="/signup" element={<Signup/> }/>
       < Route path="/contact" element={<Contact/> }/>
       < Route path="/about" element={<About/> }/>
      <Route
  path="/admin"
  element={
    authUser && authUser.role === "admin" ? (
      <AdminDashboard />
    ) : (
      <Navigate to="/" />
    )
  }
/>


      </Routes>
      <Toaster/>
    </div>
    </>
  )
}

export default App