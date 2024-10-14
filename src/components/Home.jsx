// import React from "react";
import "./Home.css";
import { testimonials } from "../data.jsx";



const Home = () => {
  return (

    <div>
      {/* Banner */}
      <div className="banner">
        <h1>Welcome to My Wep App!</h1>
      </div>

      {/* Welcome Paragraph */}
      <div className="welcome">
        <p>
          A simple web application built with React and Vite, showcasing multiple pages with demo data, including Home, About Us, Contact Us, and Testimonials. A project for learning and experimentation.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials flex flex-wrap justify-center gap-4">
        <h2 className="w-full text-center mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h2>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial flex flex-col items-center bg-white p-4 border rounded shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <p className="text-center mb-2">{testimonial.text}</p>
            <p className="font-semibold text-gray-700">-{testimonial.name}</p>
          </div>
        ))}
      </div>


      {/* Icon List Section */}
      <div className="icon-list">
        <h2>Our Advantages</h2>
        <ul>
          <li><i className="fas fa-check-circle"></i> Quality Service</li>
          <li><i className="fas fa-check-circle"></i> 24/7 Support</li>
          <li><i className="fas fa-check-circle"></i> Affordable Pricing</li>
        </ul>
      </div>

      <div className="min-h-24 bg-blue-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">Here are some Ads.</h1>
      </div>
      

    </div>
  );
};

export default Home;
