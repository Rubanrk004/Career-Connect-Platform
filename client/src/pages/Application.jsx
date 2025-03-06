import React, { useState, useEffect } from 'react';
import { TbLoader2 } from 'react-icons/tb';
import { Loader } from '../components/Loader';
import { useParams } from 'react-router';
import { MetaData } from '../components/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleJob } from '../actions/JobActions';
import { createApplication } from '../actions/ApplicationActions';
import { useNavigate } from 'react-router';

export const Application = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const { jobDetails } = useSelector(state => state.job);
    const { me } = useSelector(state => state.user);
    const { loading } = useSelector(state => state.application);
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        dispatch(getSingleJob(id));
    }, [dispatch, id]);

    const makeApplication = (e) => {
        e.preventDefault();
        dispatch(createApplication(id));
        navigate(`/details/${id}`);
    };

    return (
        <>
            <MetaData title="Job Application" />
            <div className='bg-gradient-to-b from-gray-800 to-black min-h-screen pt-14 md:px-20 px-3 text-white pb-10 mt-10'>
                <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">  
                    {/* Header */}
                    <div className='pb-6 border-b border-gray-700'>
                        <h1 className='text-4xl font-bold text-indigo-400'>Apply to {jobDetails.companyName}</h1>
                        <p className='text-lg text-gray-300 mt-2'>Job ID: {id}</p>
                    </div>
                    
                    {/* Job Details */}
                    <div className='pt-6'>
                        <h2 className='text-2xl font-semibold text-indigo-300 pb-2'>Job Details</h2>
                        <ul className='text-lg space-y-2'>
                            <li><strong>Role:</strong> {jobDetails.title}</li>
                            <li><strong>Location:</strong> {jobDetails.location}</li>
                            <li><strong>Experience:</strong> {jobDetails.experience}</li>
                        </ul>
                    </div>
                    
                    {/* Applicant Details */}
                    <div className='pt-6'>
                        <h2 className='text-2xl font-semibold text-indigo-300 pb-2'>Applicant Details</h2>
                        <ul className='text-lg space-y-2'>
                            <li><strong>Name:</strong> {me.name}</li>
                            <li><strong>Email:</strong> {me.email}</li>
                            <li><strong>Resume:</strong> <Link to={me.resume.url} target="_blank" rel="noopener noreferrer" className='text-blue-400 underline hover:text-blue-500'>View Resume</Link></li>
                        </ul>
                    </div>
                    
                    {/* Confirmation Checkbox */}
                    <div className='pt-6 flex items-start gap-3'>
                        <input type="checkbox" className="mt-1 w-5 h-5 cursor-pointer" onChange={(e) => setConfirm(e.target.checked)} />
                        <p className='text-gray-300 text-sm'>
                            I confirm that all the information provided is accurate and complete. I understand that false statements may result in disqualification.
                        </p>
                    </div>
                    
                    {/* Submit Button */}
                    <div className='pt-6'>
                        <button 
                            onClick={makeApplication} 
                            disabled={!confirm || loading} 
                            className={`w-full py-3 text-lg font-semibold rounded-lg shadow-md transition ${confirm ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 cursor-not-allowed"}`}>
                            {loading ? <TbLoader2 className='animate-spin mx-auto' size={24} /> : "Submit Application"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
