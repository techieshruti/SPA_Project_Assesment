import React from "react";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] px-6 py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          About ShopEase
        </h1>

        {/* Intro */}
        <p className="text-slate-700 text-center mb-8">
          ShopEase is a modern single-page application designed to provide a
          smooth and simple shopping experience using real-time product data.
        </p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              What is ShopEase?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              ShopEase allows users to explore a wide range of products fetched
              from a public API. The application demonstrates clean UI design,
              reusable components, and efficient data handling in a
              single-page architecture.
            </p>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Why ShopEase?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The goal of ShopEase is to showcase best practices in front-end
              development, including responsive design, API integration, and
              user-friendly layouts, making it ideal for learning and assessment
              purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
