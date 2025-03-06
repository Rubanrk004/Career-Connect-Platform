import React from 'react';
import { MdWork } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center md:text-left">
        
        {/* Company Overview */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <MdWork size={26} className="text-blue-400" /> Career Connect
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Empowering professionals to connect, grow, and achieve their career goals. Join our network for top opportunities and insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/jobs" className="hover:text-blue-400 transition">Find Jobs</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Support & Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/careeradvice" className="hover:text-blue-400 transition">Career Advice</Link></li>
            <li><Link to="/mentorshipProgram" className="hover:text-blue-400 transition">Mentorship Program</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">FAQs</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-3">Subscribe to our newsletter for job updates and career insights.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-400 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Career Connect. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition"><FaFacebookF size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition"><FaTwitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition"><FaYoutube size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition"><FaLinkedin size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition"><FaInstagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
};
