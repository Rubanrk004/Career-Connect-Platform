import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { MetaData } from '../components/MetaData';
import { Loader } from '../components/Loader';
import { getSingleJob, saveJob } from '../actions/JobActions';
import { BiBriefcase, BiBuildings, BiRupee } from 'react-icons/bi';
import { AiOutlineSave } from 'react-icons/ai';
import { HiStatusOnline } from 'react-icons/hi';
import { BsPersonWorkspace, BsSend } from 'react-icons/bs';
import { TbLoader2 } from 'react-icons/tb';
import { toast } from 'react-toastify';

export const JobDetails = () => {
  const dispatch = useDispatch();
  const { jobDetails, loading, saveJobLoading } = useSelector((state) => state.job);
  const { me, isLogin } = useSelector((state) => state.user);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleJob(id));
  }, [dispatch, id]);

  const convertDateFormat = (inputDate) => {
    const parts = inputDate.split('-');
    return parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : 'Invalid date format';
  };

  const saveJobHandler = () => {
    dispatch(saveJob(id));
  };

  const notLoginHandler = (str) => {
    if (!isLogin) {
      toast.info(`Please login to ${str} job`);
      navigate('/login');
    }
  };

  return (
    <>
      <MetaData title="Job Details" />
      <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen pt-14 md:px-20 text-white mt-10">
        {loading ? (
          <Loader />
        ) : (
          jobDetails && (
            <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-6">
              {/* Job Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8">
                <div className="w-28 h-28 bg-white p-2 rounded-lg flex items-center justify-center">
                  <img src={jobDetails.companyLogo.url} className="h-24 w-24 object-contain" alt="" />
                </div>
                <div className="flex flex-col gap-2 mt-4 md:mt-0">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <BiBriefcase /> {jobDetails.title}
                  </h2>
                  <p className="text-xl flex items-center gap-2 text-gray-300">
                    <BiBuildings /> {jobDetails.companyName}
                  </p>
                  <p className="text-lg flex items-center gap-2 text-gray-400">
                    <BsPersonWorkspace /> {jobDetails.employmentType}
                  </p>
                  <p className={`text-lg font-semibold flex items-center gap-2 ${jobDetails.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                    <HiStatusOnline /> {jobDetails.status}
                  </p>
                </div>
              </div>

              {/* Job Details */}
              <div className="mt-6 border-b border-gray-700 pb-4"></div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold mb-3">Job Details:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="font-semibold">Posted By:</span> {jobDetails.postedBy.name}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold">Posted At:</span> {convertDateFormat(jobDetails.createdAt.substr(0, 10))}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold">Location:</span> {jobDetails.location}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold">Salary:</span>
                    <div className="flex items-center gap-1">
                      <BiRupee />
                      {(jobDetails.salary / 100000).toFixed(0)} LPA
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold">Experience:</span> {jobDetails.experience}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold">Skills Required:</span>
                    <div className="flex flex-wrap gap-2">
                      {jobDetails.skillsRequired.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-yellow-600 text-black rounded-md text-sm font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </li>
                  <li className="mt-4">
                    <h3 className="text-2xl font-semibold">Job Description:</h3>
                    <p className="mt-2 text-gray-300">{jobDetails.description}</p>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-6 mt-6">
                <button
                  onClick={() => {
                    if (isLogin) {
                      me.appliedJobs && me.appliedJobs.includes(jobDetails._id)
                        ? toast.error('You have already applied!')
                        : navigate(`/Application/${jobDetails._id}`);
                    } else {
                      notLoginHandler('apply');
                    }
                  }}
                  className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 transition"
                >
                  <BsSend />
                  {me.appliedJobs && me.appliedJobs.includes(jobDetails._id) ? 'Applied' : 'Apply'}
                </button>

                <button
                  onClick={() => {
                    isLogin ? saveJobHandler() : notLoginHandler('save');
                  }}
                  className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 transition"
                >
                  {saveJobLoading ? <TbLoader2 className="animate-spin" size={20} /> : <AiOutlineSave />}
                  {me.savedJobs && me.savedJobs.includes(jobDetails._id) ? 'Unsave' : 'Save'}
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
