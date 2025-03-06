import React from "react";
import { MetaData } from "../components/MetaData";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiOutlineTwitter, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import Card from "../components/Card";
import Accordion from "../components/Accordion";

export const Contact = () => {
  return (
    <>
      <MetaData title="Contact" />
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen pt-14 md:px-20 px-4 text-white flex flex-col items-center">
        
        {/* Page Title */}
        <div className="text-5xl mt-12 font-extrabold text-center pb-10 tracking-wide uppercase">
          Let's <span className="text-indigo-400">Connect</span>
        </div>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl pb-16">
          
          {/* Contact Introduction */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <p className="text-4xl font-semibold text-white pb-4 text-center">
              Reach Out to Us
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Have questions, feedback, or need assistance? Our team is here to help! 
              Get in touch with us using the details below, and we’ll make sure to respond as soon as possible.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-5">
            <Card
              title="📍 Office Location"
              content="Career Connect, Silicon Valley, California, USA"
              className="hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
            <Card
              title="📧 Email Support"
              content={[
                "General Inquiries: hello@careerconnect.com",
                "Customer Support: support@careerconnect.com",
                "Partnerships: partnerships@careerconnect.com",
              ]}
              className="hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
            <Card
              title="📞 Contact Numbers"
              content={[
                "Support: +1-800-123-4567",
                "Business: +1-800-987-6543",
              ]}
              className="hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center pb-12">
          <p className="text-3xl font-semibold text-indigo-400 pb-4">Follow Us Online</p>
          <div className="flex justify-center gap-8">
            <BsFacebook className="hover:text-blue-600 transition duration-300 cursor-pointer text-3xl" />
            <AiFillInstagram className="hover:text-pink-500 transition duration-300 cursor-pointer text-4xl" />
            <AiOutlineTwitter className="hover:text-blue-400 transition duration-300 cursor-pointer text-4xl" />
            <BsLinkedin className="hover:text-blue-700 transition duration-300 cursor-pointer text-4xl" />
            <AiOutlineMail className="hover:text-red-600 transition duration-300 cursor-pointer text-3xl" />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full mb-7 max-w-4xl">
          <p className="text-4xl font-semibold text-indigo-400 text-center pb-6">
            Frequently Asked Questions
          </p>
          <div className="space-y-6">
            <Accordion
              question="🔹 How can I join Career Connect?"
              answer="Signing up is easy! Click on ‘Sign Up’, fill in your details, and start exploring career opportunities right away."
              className="hover:bg-gray-800 transition duration-300 p-4 rounded-lg"
            />
            <Accordion
              question="📂 What services do you offer?"
              answer="We provide career guidance, mentorship programs, job listings, and networking opportunities for professionals."
              className="hover:bg-gray-800 transition duration-300 p-4 rounded-lg"
            />
            <Accordion
              question="💡 How can I become a mentor?"
              answer="If you're an experienced professional willing to guide others, apply through our Mentorship Program page."
              className="hover:bg-gray-800 transition duration-300 p-4 rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
