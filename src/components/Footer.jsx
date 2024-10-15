import "../App.css";

export default function Footer() {
  return (
    <footer className="footer bg-gray-800 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Block 1: Company Info */}
        <div className="block">
          <h3 className="font-bold mb-2">Company Info</h3>
          <p>
            &copy; 2024 Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Odio, adipisci debitis hic ut nostrum dicta neque tempore deleniti ullam illum. 
            All Rights Reserved.
          </p>
        </div>
        
        {/* Block 3: Contact Information */}
        <div className="block">
          <h3 className="font-bold mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:contact@example.com" className="hover:text-blue-400">contact@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-blue-400">+1 (234) 567-890</a></p>
        </div>

        {/* Block 4: Social Media Links */}
        <div className="block">
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex flex-col space-y-1">
            <a href="https://facebook.com" className="hover:text-blue-400">Facebook</a>
            <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
            <a href="https://instagram.com" className="hover:text-blue-400">Instagram</a>
            <a href="https://linkedin.com" className="hover:text-blue-400">LinkedIn</a>
          </div>
        </div>

        {/* Block 5: Newsletter Signup */}
        <div className="block">
          <h3 className="font-bold mb-2">Newsletter Signup</h3>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-lg border border-gray-300 mb-2"
            />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
