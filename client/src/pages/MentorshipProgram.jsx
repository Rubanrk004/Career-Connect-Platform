import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaChalkboardTeacher, FaNetworkWired } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const MentorshipProgram = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">Mentorship Program</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Connect with experienced professionals to accelerate your career growth and gain valuable industry insights.
        </p>
      </section>

      {/* Benefits of Mentorship */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-10 text-center">
        <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
          <FaChalkboardTeacher size={50} className="text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Career Guidance</h3>
          <p className="text-gray-300 mt-2">Receive one-on-one guidance from industry experts to navigate your career path.</p>
        </div>
        <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
          <FaUsers size={50} className="text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Skill Development</h3>
          <p className="text-gray-300 mt-2">Enhance your skills through mentorship sessions, workshops, and training.</p>
        </div>
        <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
          <FaNetworkWired size={50} className="text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Networking Opportunities</h3>
          <p className="text-gray-300 mt-2">Build connections with industry leaders and expand your professional network.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-10">What Our Mentees Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="p-6 bg-gray-900 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-300 italic">"This program connected me with an amazing mentor who guided me through my career transition!"</p>
            <h4 className="mt-4 text-lg font-semibold">- Sarah Johnson</h4>
          </motion.div>
          <motion.div 
            className="p-6 bg-gray-900 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-300 italic">"Thanks to my mentor, I landed my dream job and gained confidence in my skills!"</p>
            <h4 className="mt-4 text-lg font-semibold">- Mark Williams</h4>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-4">Join Our Mentorship Program</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">Sign up today to find a mentor who can help you achieve your career goals.</p>
        <Link to="/mentorship" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default MentorshipProgram;
