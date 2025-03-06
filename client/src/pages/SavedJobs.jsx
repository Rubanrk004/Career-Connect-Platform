import React, { useEffect } from 'react';
import { MetaData } from '../components/MetaData';
import { getSavedJobs } from '../actions/JobActions';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { SaveJobCard } from '../components/SaveJobCard';
import { Link } from 'react-router-dom';

export const SavedJobs = () => {
  const dispatch = useDispatch();

  const { savedJobs, saveJobLoading, loading } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(getSavedJobs());
  }, [dispatch, saveJobLoading]);

  return (
    <>
      <MetaData title="Saved Jobs" />
      <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen pt-16 md:px-24 px-4 text-white">
        {loading ? (
          <Loader />
        ) : (
          <div className="pt-8 md:px-32 px-2 pb-32">
            {savedJobs.length > 0 ? (
              <>
                <h2 className="text-center text-4xl font-semibold pb-6">Saved Jobs</h2>
                <div className="flex flex-col gap-6">
                  {savedJobs.slice().reverse().map((job, i) => (
                    <SaveJobCard key={i} job={job} />
                  ))}
                </div>
              </>
            ) : (
              <div className="pt-12 text-center flex flex-col justify-center items-center">
                <img src="/images/jobEmpty.svg" className="w-60 h-60 opacity-90" alt="No Saved Jobs" />
                <p className="md:text-3xl text-xl font-light pt-5">You haven’t saved any jobs yet.</p>
                <p className="text-gray-400 text-sm md:text-base mt-2">
                  Start exploring new opportunities and save jobs to revisit them later.
                </p>
                <Link
                  to="/jobs"
                  className="mt-6 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-6 py-2 rounded-lg"
                >
                  Browse Jobs
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
