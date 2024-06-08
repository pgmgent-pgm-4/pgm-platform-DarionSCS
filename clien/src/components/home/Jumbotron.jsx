import React from "react";

const Jumbotron = () => {
  return (
    <div className="bg-gray-800 text-white p-10 mt-10 text-center rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Program</h1>
      <p className="text-lg mb-6">
        Learn more about our courses, projects, and services.
      </p>
      <a
        href="/apply"
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700"
      >
        Apply Now
      </a>
    </div>
  );
};

export default Jumbotron;
