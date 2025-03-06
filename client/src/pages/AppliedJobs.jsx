import React, { useEffect } from 'react'
import { MetaData } from '../components/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getAppliedJob } from '../actions/ApplicationActions'
import { Loader } from '../components/Loader'
import { AppliedJobCard } from '../components/AppliedJobCard'
import { Link } from 'react-router-dom'

export const AppliedJobs = () => {
  const { loading, appliedJobs } = useSelector(state => state.application);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppliedJob());
  }, [dispatch]);

  return (
    <>
      <MetaData title="Applied Jobs" />
      <div className='bg-gradient-to-b from-gray-800 to-black min-h-screen pt-16 md:px-24 px-5 text-white flex flex-col items-center mt-10'>
        {loading ? (
          <Loader />
        ) : (
          <div className='w-full max-w-4xl'>
            {appliedJobs.length > 0 ? (
              <>
                <h2 className='text-center text-4xl font-semibold mb-6'>Applied Jobs</h2>
                <div className='space-y-6'>
                  {appliedJobs.slice().reverse().map((app, i) => (
                    <AppliedJobCard key={app._id} id={app._id} time={app.createdAt} job={app.job} />
                  ))}
                </div>
              </>
            ) : (
              <div className='flex flex-col items-center text-center mt-16'>
                <img src='/images/jobEmpty.svg' className='w-64 h-64 mb-6' alt='No Jobs Applied' />
                <p className='text-2xl font-medium'>You haven't applied to any jobs yet!</p>
                <Link to='/jobs' className='mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg transition-all'>Browse Jobs</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
