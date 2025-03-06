import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MetaData } from '../components/MetaData';
import { useSelector, useDispatch } from 'react-redux';
import { getAllJobs } from '../actions/JobActions';
import Testimonials from '../components/Testimonials/Testimonials.jsx';

export const Home = () => {
    const dispatch = useDispatch();
    const { allJobs } = useSelector(state => state.job);

    useEffect(() => {
        dispatch(getAllJobs());
    }, [dispatch]);

    const companies = Array.from({ length: 20 }, (_, i) => ({
        link: `/images/JobData/${i + 1}.jpg`
    }));

    return (
        <>
            <MetaData title="Career Connect - Find Your Dream Job" />
            <div className='min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col items-center pt-20 px-6 md:px-20'>
                {/* Hero Section */}
                <div className='text-center space-y-6'>
                    <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>Career Connect</h1>
                    <p className='text-lg md:text-2xl text-gray-300'><span className='text-yellow-400 font-semibold'>Unlock</span> limitless opportunities and take your career to the next level.</p>
                    <Link to="/jobs" className='inline-block mt-4 px-8 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 transition rounded-full shadow-lg'>Explore Jobs</Link>
                </div>
                
                {/* Featured Companies */}
                <div className='mt-16 w-full text-center'>
                    <h2 className='text-3xl font-semibold'>Top Companies Hiring</h2>
                    <p className='text-lg text-gray-300 mt-2'>Discover companies that are actively seeking talented professionals like you.</p>
                    <div className='flex flex-wrap justify-center gap-6 mt-6'>
                        {companies.map((company, i) => (
                            <div key={i} className='bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-110 flex items-center justify-center w-24 h-24'>
                                <img src={company.link} alt='Company Logo' className='w-full h-full object-contain' />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enhanced Testimonials Section */}
                <div className='mt-16 w-full bg-gray-900 py-10 px-6 rounded-lg shadow-lg'>
                    <h2 className='text-3xl font-semibold text-center text-white'>What Our Users Say</h2>
                    <div className='flex flex-wrap justify-center gap-6'>
                        <Testimonials />
                    </div>
                </div>

                {/* Final CTA */}
                <div className='mt-20 text-center px-6 md:px-40 text-lg text-gray-300'>
                    <p className='italic text-white font-light'>"Your career is your journey. Let Career Connect be your guide to new opportunities, professional growth, and success. Start today!"</p>
                </div>
            </div>
        </>
    );
};
