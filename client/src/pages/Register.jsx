import React, { useState, useEffect } from 'react';
import { MetaData } from '../components/MetaData';
import { AiOutlineMail, AiOutlineUnlock, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { MdPermIdentity, MdOutlineFeaturedPlayList } from 'react-icons/md';
import { BsFileEarmarkText } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { TbLoader2 } from 'react-icons/tb';
import { registerUser } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';

export const Register = () => {
  const { loading, isLogin } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [eyeTog, setEyeTog] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [skills, setSkills] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarName, setAvatarName] = useState('');
  const [resume, setResume] = useState('');
  const [resumeName, setResumeName] = useState('');

  const handleFileChange = (e, setFile, setFileName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile(reader.result);
          setFileName(file.name);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    const skillsArr = skills.split(',');
    const data = { name, email, password, avatar, resume, skills: skillsArr };
    dispatch(registerUser(data));
    setName('');
    setEmail('');
    setPassword('');
    setAvatar('');
    setAvatarName('');
    setResume('');
    setResumeName('');
    setSkills('');
  };

  useEffect(() => {
    if (isLogin) navigate('/');
  }, [isLogin, navigate]);

  return (
    <>
      <MetaData title="Register" />
      <div className="bg-gray-950 min-h-screen flex items-center justify-center px-4 mt-14">
        <div className="bg-gray-900 text-white rounded-lg shadow-xl w-full max-w-lg p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Create an Account</h2>
          <form onSubmit={registerHandler} className="space-y-4">
            {/* Name */}
            <div className="relative">
              <MdPermIdentity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:ring-2 focus:ring-blue-500" />
            </div>

            {/* Email */}
            <div className="relative">
              <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:ring-2 focus:ring-blue-500" />
            </div>

            {/* Password */}
            <div className="relative">
              <AiOutlineUnlock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input type={eyeTog ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full pl-10 pr-10 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:ring-2 focus:ring-blue-500" />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" onClick={() => setEyeTog(!eyeTog)}>
                {eyeTog ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
              </div>
            </div>

            {/* Profile Picture */}
            <div className="flex items-center gap-3">
              {avatar ? <img src={avatar} className="w-12 h-12 rounded-full" alt="Profile" /> : <CgProfile size={40} className="text-gray-400" />}
              <label className="cursor-pointer text-sm font-medium text-gray-300" htmlFor="avatar">{avatarName || "Select Profile Picture"}</label>
              <input type="file" id="avatar" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, setAvatar, setAvatarName)} />
            </div>

            {/* Resume Upload */}
            <div className="flex items-center gap-3">
              <BsFileEarmarkText size={20} className="text-gray-400" />
              <label className="cursor-pointer text-sm font-medium text-gray-300" htmlFor="resume">{resumeName || "Upload Resume"}</label>
              <input type="file" id="resume" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, setResume, setResumeName)} />
            </div>

            {/* Skills */}
            <textarea placeholder="Skills (comma separated)" value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:ring-2 focus:ring-blue-500" />

            {/* Register Button */}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded flex justify-center items-center">
              {loading ? <TbLoader2 className="animate-spin" size={24} /> : "Register"}
            </button>
            <p className="text-center text-sm">Already have an account? <Link to="/login" className="text-yellow-400 hover:underline">Login here</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};