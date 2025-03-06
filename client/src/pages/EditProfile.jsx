import React, { useState, useEffect } from 'react';
import { Loader } from '../components/Loader';
import { MetaData } from '../components/MetaData';
import { AiOutlineMail } from 'react-icons/ai';
import { MdPermIdentity, MdOutlineFeaturedPlayList } from 'react-icons/md';
import { BsFileEarmarkText } from 'react-icons/bs';
import { updateProfile, me as ME } from '../actions/UserActions';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';

export const EditProfile = () => {
  const dispatch = useDispatch();
  const { loading, me } = useSelector((state) => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarName, setAvatarName] = useState('');
  const [resume, setResume] = useState('');
  const [resumeName, setResumeName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!me) {
      dispatch(ME());
    }
  }, [dispatch, me]);

  useEffect(() => {
    if (me) {
      setName(me.name || '');
      setEmail(me.email || '');
      setSkills(Array.isArray(me.skills) ? me.skills.join(', ') : me.skills || '');
    }
  }, [me]);

  const avatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        setAvatarName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const resumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResume(reader.result);
        setResumeName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const editHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const skillArr = skills.split(',').map((skill) => skill.trim());
    const data = {
      newName: name,
      newEmail: email,
      newAvatar: avatar || undefined,
      newResume: resume || undefined,
      newSkills: skillArr,
    };

    await dispatch(updateProfile(data));
    setIsSubmitting(false);
  };

  return (
    <>
      <MetaData title="Edit Profile" />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-black p-6 mt-14">
        {loading ? (
          <Loader />
        ) : (
          <div className="w-full max-w-lg bg-white bg-gradient-to-b from-gray-700 to-black bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-white">
            <h2 className="text-center text-3xl font-bold mb-6">Edit Profile</h2>

            <form onSubmit={editHandler} className="space-y-5">
              {/* Name */}
              <div className="flex items-center bg-gray-100 bg-opacity-20 p-3 rounded-lg">
                <MdPermIdentity size={20} className="text-gray-300" />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Full Name"
                  type="text"
                  className="w-full bg-transparent outline-none text-white px-3"
                />
              </div>

              {/* Email */}
              <div className="flex items-center bg-gray-100 bg-opacity-20 p-3 rounded-lg">
                <AiOutlineMail size={20} className="text-gray-300" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  type="email"
                  className="w-full bg-transparent outline-none text-white px-3"
                />
              </div>

              {/* Profile Picture Upload */}
              <div className="bg-gray-100 bg-opacity-20 p-3 rounded-lg">
                <div className="flex items-center">
                  <CgProfile size={20} className="text-gray-300" />
                  <label htmlFor="avatar" className="w-full cursor-pointer text-white px-3">
                    {avatarName || 'Select New Profile Picture...'}
                  </label>
                  <input id="avatar" name="avatar" onChange={avatarChange} accept="image/*" type="file" className="hidden" />
                </div>
                {avatar && <img src={avatar} alt="Preview" className="mt-2 rounded-lg w-16 h-16 object-cover" />}
              </div>

              {/* Resume Upload */}
              <div className="bg-gray-100 bg-opacity-20 p-3 rounded-lg">
                <div className="flex items-center">
                  <BsFileEarmarkText size={20} className="text-gray-300" />
                  <label htmlFor="resume" className="w-full cursor-pointer text-white px-3">
                    {resumeName || 'Upload Resume (PDF, Image)'}
                  </label>
                  <input id="resume" name="resume" onChange={resumeChange} accept="application/pdf, image/*" type="file" className="hidden" />
                </div>
                {resume && <p className="text-xs text-gray-300 mt-1">File uploaded: {resumeName}</p>}
              </div>

              {/* Skills */}
              <div className="bg-gray-100 bg-opacity-20 p-3 rounded-lg">
                <MdOutlineFeaturedPlayList size={20} className="text-gray-300" />
                <textarea
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="Skills (comma-separated)"
                  className="w-full bg-transparent outline-none text-white px-3"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                  isSubmitting ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Updating...' : 'Update Profile'}
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
