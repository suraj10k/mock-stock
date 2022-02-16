import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-12">
      <div className="container px-8 sm:px-16 py-4 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Mock Stocks</Link>
              </div>

              <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">The trading platform for all.</p>

          
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Info</h3>
                <Link to="/guide" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Guide</Link>
                <Link to="/careers" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Stack</h3>
                <a href="https://www.mongodb.com/mern-stack" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">MERN</a>
                <a href="https://socket.io/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">Socket.IO</a>
              </div>

             

            
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white">© Mock Stocks {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
