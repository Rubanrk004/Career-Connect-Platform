import React from "react";
import { MetaData } from "../components/MetaData";
import { useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

export const MyProfile = () => {
  const { loading, me } = useSelector((state) => state.user);
  const [opened, { open, close }] = useDisclosure(false);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  if (loading) return <Loader />;

  return (
    <>
      <MetaData title="My Profile" />
      <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen pt-14 flex flex-col items-center text-white">
        <div className="max-w-5xl w-full px-6 py-10">
          {/* Page Title */}
          <h1 className="text-5xl font-bold text-center text-white text-400 pb-8">My Profile</h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Profile Image & Actions */}
            <div className="flex flex-col items-center w-full md:w-1/3 space-y-6">
              <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg hover:scale-105 transition">
                <img src={me.avatar.url} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <Link
                to="/editProfile"
                className="bg-indigo-500 px-6 py-2 text-lg font-semibold rounded-md shadow-md hover:bg-indigo-600 transition"
              >
                Edit Profile
              </Link>
            </div>

            {/* Profile Details */}
            <div className="w-full md:w-2/3 bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
              {[
                { label: "Full Name", value: me.name },
                { label: "Email", value: me.email },
                { label: "Joined On", value: formatDate(me.createdAt.substr(0, 10)) },
              ].map(({ label, value }, index) => (
                <div key={index} className="space-y-3">
                  <h2 className="text-2xl font-semibold">{label}</h2>
                  <p className="text-lg text-gray-300">{value}</p>
                </div>
              ))}

              {/* Skills */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {me.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-yellow-500 text-black px-3 py-1 text-sm font-bold rounded-lg shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Profile Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {[ 
                  { label: "My Resume", onClick: open, color: "bg-blue-600 hover:bg-blue-700" },
                  { label: "My Applications", link: "/applied", color: "bg-green-600 hover:bg-green-700" },
                  { label: "Saved Jobs", link: "/saved", color: "bg-purple-600 hover:bg-purple-700" },
                  { label: "Change Password", link: "/changePassword", color: "bg-red-500 hover:bg-red-600" },
                  { label: "Delete Account", link: "/deleteAccount", color: "bg-gray-700 hover:bg-gray-800" },
                ].map(({ label, link, onClick, color }, index) => (
                  <div key={index} className="w-full">
                    {link ? (
                      <Link to={link}>
                        <button className={`w-full py-2 text-lg font-semibold rounded-lg shadow-md transition ${color}`}>
                          {label}
                        </button>
                      </Link>
                    ) : (
                      <button onClick={onClick} className={`w-full py-2 text-lg font-semibold rounded-lg shadow-md transition ${color}`}>
                        {label}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <Modal opened={opened} onClose={close} title="My Resume">
        <img src={me.resume.url} className="w-full h-auto rounded-lg shadow-md" alt="Resume" />
      </Modal>
    </>
  );
};