import React from 'react';
import { FaLightbulb, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import { MdWork, MdSchool } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CareerAdvice = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20 px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400">Career Advice</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Expert insights, practical tips, and industry guidance to help you build a successful career.
        </p>
      </div>
      
      {/* Advice Sections */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-3 gap-10 py-10">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg text-center">
          <FaLightbulb className="text-blue-400 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Resume & Interview Tips</h3>
          <p className="text-gray-400 mt-2">Craft a winning resume and ace your interviews with confidence.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg text-center">
          <MdWork className="text-blue-400 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Career Growth Strategies</h3>
          <p className="text-gray-400 mt-2">Learn how to progress in your field and achieve long-term success.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg text-center">
          <FaUserGraduate className="text-blue-400 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Education & Upskilling</h3>
          <p className="text-gray-400 mt-2">Discover courses, certifications, and learning paths to stay ahead.</p>
        </motion.div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-400">What Professionals Say</h2>
        <p className="text-gray-400 mt-2 max-w-3xl mx-auto">Hear from professionals who have benefited from our career advice.</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <p className="text-gray-300">"The resume tips helped me land my dream job! Highly recommended."</p>
            <h4 className="text-blue-400 font-semibold mt-4">- Alex Johnson</h4>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <p className="text-gray-300">"Amazing career guidance that helped me transition into a new industry."</p>
            <h4 className="text-blue-400 font-semibold mt-4">- Sarah Lee</h4>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-blue-400">Need Personalized Career Advice?</h2>
        <p className="text-gray-400 mt-2">Join our mentorship program and get expert guidance.</p>
        <Link to="/mentorship" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition">
          Join Mentorship Program
        </Link>
      </div>
    </div>
  );
};

export default CareerAdvice;