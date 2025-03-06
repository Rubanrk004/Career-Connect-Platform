import React, { useEffect, useState } from 'react';
import { MetaData } from '../components/MetaData';
import { FiSearch } from 'react-icons/fi';
import { Loader } from '../components/Loader';
import { JobCard } from '../components/JobCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, getSingleJob } from '../actions/JobActions';
import { Slider, Pagination } from '@mantine/core';
import { RxCross2 } from 'react-icons/rx';
import useIsMobile from '../hooks/useIsMobile';

export const Jobs = () => {
  const dispatch = useDispatch();
  const { allJobs, loading } = useSelector(state => state.job);

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [salary, setSalary] = useState(0);
  const [company, setCompany] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  useEffect(() => {
    setJobs(allJobs);
  }, [allJobs]);

  const filterJobs = () => {
    let filteredJobs = allJobs;
    if (search) {
      filteredJobs = filteredJobs.filter(job =>
        job.title.toLowerCase().includes(search.toLowerCase().trim())
      );
    }
    if (category) {
      filteredJobs = filteredJobs.filter(job => job.category === category);
    }
    if (salary) {
      filteredJobs = filteredJobs.filter(job => parseInt(job.salary) >= salary);
    }
    if (company) {
      filteredJobs = filteredJobs.filter(job => job.companyName.toLowerCase().includes(company.toLowerCase().trim()));
    }
    setJobs(filteredJobs);
  };

  useEffect(filterJobs, [search, category, salary, company, allJobs]);

  const itemsPerPage = 5;
  const totalPageCount = Math.ceil(jobs.length / itemsPerPage);
  const displayedData = jobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <MetaData title="Jobs" />
      <div className='bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen text-white pt-14 px-6 sm:px-20'>
        {loading ? <Loader /> : (
          <>
            <div className='text-center pt-8 text-3xl font-semibold'>Find Your Dream Job</div>

            <div className='flex justify-center items-center py-5'>
              <div className='bg-white flex sm:w-2/5 w-4/5 rounded-lg shadow-lg overflow-hidden'>
                <FiSearch className='text-gray-600 m-3' size={22} />
                <input 
                  type='text' 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search Jobs...' 
                  className='flex-1 px-2 py-2 outline-none text-black' 
                />
                {search && (
                  <RxCross2 className='text-gray-600 cursor-pointer m-3' size={22} onClick={() => setSearch("")} />
                )}
                <button className='bg-indigo-600 px-5 py-2 text-white font-semibold hover:bg-indigo-700 transition'>Search</button>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-6'>
              {/* Left Filters */}
              {!isMobile && (
                <div className='w-1/4 bg-gray-900 p-4 rounded-lg shadow-lg'>
                  <p className='text-lg font-bold pb-3 border-b border-gray-700'>Filters</p>
                  <div className='py-3'>
                    <p className='text-sm text-gray-300'>Category</p>
                    <select className='w-full px-3 py-2 bg-gray-800 rounded mt-2' onChange={(e) => setCategory(e.target.value)}>
                      <option value=''>All Categories</option>
                      <option value='Technology'>Technology</option>
                      <option value='Marketing'>Marketing</option>
                      <option value='Finance'>Finance</option>
                    </select>
                  </div>
                  <div className='py-3'>
                    <p className='text-sm text-gray-300'>Salary Range</p>
                    <Slider min={0} max={2000000} value={salary} onChange={setSalary} color='indigo' className='mt-2' />
                  </div>
                  <button onClick={filterJobs} className='bg-indigo-600 w-full py-2 mt-4 rounded font-semibold hover:bg-indigo-700'>Apply Filters</button>
                </div>
              )}

              {/* Job Listings */}
              <div className='flex-1'>
                {jobs.length === 0 ? (
                  <p className='text-center text-gray-400 text-lg pt-10'>No jobs available based on your criteria.</p>
                ) : (
                  displayedData.map(job => (
                    <JobCard key={job._id} job={job} onClick={() => dispatch(getSingleJob(job._id))} />
                  ))
                )}
                
                {/* Pagination */}
                {totalPageCount > 1 && (
                  <div className='flex justify-center mt-6'>
                    <Pagination total={totalPageCount} page={currentPage} onChange={setCurrentPage} size='md' radius='lg' />
                  </div>
                )}
              </div>

              {/* Right Side Filters - Company Search */}
              {!isMobile && (
                <div className='w-1/4 bg-gray-900 p-4 rounded-lg shadow-lg'>
                  <p className='text-lg font-bold pb-3 border-b border-gray-700'>Company</p>
                  <div className='py-3'>
                    <input 
                      type='text' 
                      value={company} 
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder='Search by Company...' 
                      className='w-full px-3 py-2 bg-gray-800 rounded mt-2 outline-none' 
                    />
                  </div>
                  <button onClick={filterJobs} className='bg-indigo-600 w-full py-2 mt-4 rounded font-semibold hover:bg-indigo-700'>Apply Filters</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};
