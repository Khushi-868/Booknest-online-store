import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/bookshelf.jpg')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6 py-12 text-white">
        <h2 className="text-4xl font-bold mb-4">About BookNest</h2>
        <p className="text-lg">
          Welcome to <span className="font-semibold text-blue-300">BookNest</span> – your digital library and ultimate reading companion.
          At BookNest, we aim to bring readers and books closer than ever by offering a seamless and personalized book browsing experience.
        </p>
        <p className="mt-4 text-lg">
          Whether you're into fiction, non-fiction, academic texts, or niche genres, BookNest lets you explore, save, and discover your next
          favorite read.
        </p>
        <p className="mt-4 text-lg">
          Dive in, explore thousands of books, and build your very own nest of knowledge.
        </p>

        <button
          onClick={goToHome}
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default About;
