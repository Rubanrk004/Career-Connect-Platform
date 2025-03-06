import React from 'react';
import { MetaData } from '../components/MetaData';

export const About = () => {
  return (
    <>
      <MetaData title="About" />
      <div className="bg-gray-900 min-h-screen pt-14 md:px-20 px-4 text-white flex flex-col items-center">
        {/* Page Title */}
        <div className="text-5xl font-extrabold text-center pb-10 tracking-wide mt-16">
          About <span className="text-indigo-400">Career Connect</span>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-3 gap-8 pb-20 w-full max-w-7xl">
          {/* Our Mission */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-lg bg-opacity-90 border border-gray-700">
            <p className="text-3xl font-semibold text-center text-white pb-4">
              Our Mission
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              At <span className="text-indigo-400 font-bold">Career Connect</span>, our mission is to empower professionals by 
              connecting them with opportunities that match their skills, passion, 
              and aspirations. We believe in fostering meaningful career journeys 
              through networking, mentorship, and skill-building.
            </p>
          </div>

          {/* Why Choose Us? */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-lg bg-opacity-90 border border-gray-700">
            <p className="text-3xl font-semibold text-center text-white pb-4">
              Why Choose Us?
            </p>
            <ul className="list-none space-y-4 text-lg text-gray-300">
              <li className="flex items-center">
                <span className="text-indigo-400 font-bold pr-2">🔍 Smart Career Insights:</span> 
                AI-driven recommendations to help you make informed career decisions.
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 font-bold pr-2">🌐 Professional Networking:</span> 
                Connect with industry experts, mentors, and peers worldwide.
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 font-bold pr-2">📚 Continuous Learning:</span> 
                Access career resources, skill-building courses, and expert guidance.
              </li>
            </ul>
          </div>

          {/* Be a Part of the Future */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-lg bg-opacity-90 border border-gray-700">
            <p className="text-3xl font-semibold text-center text-white pb-4">
              Be a Part of the Future
            </p>
            <p className="leading-relaxed text-gray-300">
              Joining <span className="text-indigo-400 font-bold">Career Connect</span> means stepping into a world of possibilities. 
              Whether you're seeking a new role, mentorship, or career growth, 
              we are here to support your journey every step of the way.
            </p>
            <p className="mt-4 text-center font-semibold text-indigo-400 text-lg">
              🚀 Start your journey with us today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
