import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaReact, FaRobot, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

export const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Mastering React: Best Practices & Tips",
      author: "John Doe",
      date: "March 6, 2025",
      icon: <FaReact className="text-blue-400 text-6xl mx-auto" />,
      excerpt: "Learn how to write clean, efficient, and scalable React applications with these best practices...",
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      author: "Jane Smith",
      date: "February 20, 2025",
      icon: <FaRobot className="text-green-400 text-6xl mx-auto" />,
      excerpt: "Explore how AI is revolutionizing web development and how you can stay ahead in the industry...",
    },
    {
      id: 3,
      title: "Building a Successful Freelance Career",
      author: "Alice Johnson",
      date: "January 15, 2025",
      icon: <FaBriefcase className="text-yellow-400 text-6xl mx-auto" />,
      excerpt: "Discover the key steps to launching and growing a sustainable freelance career in tech...",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-72 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "none", // Removed background image
        }}
      >
        <div className="bg-gradient-to-b from-gray-750 bg-opacity-60 p-8 rounded-lg text-center mt-10">
          <h1 className="text-4xl font-bold">Explore the World of Knowledge</h1>
          <p className="mt-2 text-lg text-gray-300">Stay updated with the latest insights, tips, and trends.</p>
        </div>
      </div>

      {/* Featured Blog Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              {blog.icon} {/* React Icon */}
              <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
              <p className="text-gray-400 flex items-center justify-center gap-2 mt-2">
                <FaUser /> {blog.author} | <FaCalendarAlt /> {blog.date}
              </p>
              <p className="text-gray-300 mt-2">{blog.excerpt}</p>
              <Link to={`/blog/${blog.id}`} className="text-blue-400 mt-4 inline-block hover:underline">
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      {/* <div className="bg-gray-900 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-6">Get the latest blog updates directly in your inbox.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg w-64 text-black focus:outline-none"
          />
          <button className="bg-blue-500 px-6 py-3 rounded-r-lg hover:bg-blue-600 transition">Subscribe</button>
        </div>
      </div> */}
    </div>
  );
};

export default BlogPage;
