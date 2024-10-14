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
      <div className="testimonials">
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>{testimonial.text}</p>
            <p>-{testimonial.name}</p>
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
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
    </div>
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, adipisci debitis hic ut nostrum dicta neque tempore deleniti ullam illum. All Rights Reserved.</p>
      </footer>
      
    </div>
  );
};

export default Home;
