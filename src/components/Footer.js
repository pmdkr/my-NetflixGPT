import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mt-12"> {/* Increased top margin */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaYoutube size={24} />
          </a>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2024 Netflix-GPT by Pramod. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
