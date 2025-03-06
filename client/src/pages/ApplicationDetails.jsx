import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader'
import { MetaData } from '../components/MetaData'
import { getSingleApplication, deleteApplication } from '../actions/ApplicationActions'
import { Link } from 'react-router-dom'
import { TbLoader2 } from 'react-icons/tb'

export const ApplicationDetails = () => {
    const { applicationDetails, loading } = useSelector(state => state.application)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getSingleApplication(id))
    }, [dispatch, id])

    const deleteApplicationHandler = () => {
        dispatch(deleteApplication(id))
        navigate("/applied")
    }

    const toUpperFirst = (str = "") => str.charAt(0).toUpperCase() + str.slice(1)

    const convertDateFormat = (inputDate) => {
        const [year, month, day] = inputDate.split('-');
        return `${day}-${month}-${year}`;
    }

    const extractTime = (inputString) => {
        const dateTimeObj = new Date(inputString);
        const hours = dateTimeObj.getHours();
        const minutes = dateTimeObj.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const hours12 = hours % 12 || 12;
        return `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
    }

    return (
        <>
            <MetaData title="Application Details" />
            <div className='bg-gradient-to-b from-gray-800 to-black min-h-screen pt-14 px-4 md:px-20 text-white mt-10 mb-10bg-gradient-to-b from-gray-800 to-black min-h-screen pt-14 md:px-20 px-3 text-white pb-10 mt-10'>
                {loading ? <Loader /> : (
                    <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
                        <h1 className='text-3xl font-bold text-indigo-400 mb-4'>Application #{id}</h1>

                        {/* Job Details */}
                        <div className='mb-6 p-4 bg-gray-800 rounded-lg shadow'>
                            <h2 className='text-2xl font-semibold text-indigo-300 mb-3'>Job Details</h2>
                            <ul className='space-y-2'>
                                <li><strong>Role:</strong> {applicationDetails.job.title}</li>
                                <li><strong>Company:</strong> {applicationDetails.job.companyName}</li>
                                <li><strong>Location:</strong> {applicationDetails.job.location}</li>
                                <li><strong>Experience:</strong> {applicationDetails.job.experience}</li>
                            </ul>
                        </div>

                        {/* Applicant Details */}
                        <div className='mb-6 p-4 bg-gray-800 rounded-lg shadow'>
                            <h2 className='text-2xl font-semibold text-indigo-300 mb-3'>Applicant Details</h2>
                            <ul className='space-y-2'>
                                <li><strong>Name:</strong> {applicationDetails.applicant.name}</li>
                                <li><strong>Email:</strong> {applicationDetails.applicant.email}</li>
                                <li>
                                    <strong>Resume:</strong> 
                                    <Link to={applicationDetails.applicantResume.url} target="_blank" rel="noreferrer" className='text-blue-400 underline hover:text-blue-500 ml-2'>View Resume</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Status and Date */}
                        <div className='mb-6 p-4 bg-gray-800 rounded-lg shadow'>
                            <div className='flex justify-between'>
                                <div className='text-xl'>
                                    <strong>Status:</strong> 
                                    <span className={`${applicationDetails.status === "pending" ? "text-yellow-500" : applicationDetails.status === "rejected" ? "text-red-500" : "text-green-500"} font-semibold ml-2`}>{toUpperFirst(applicationDetails.status)}</span>
                                </div>
                                <div className='text-lg'>
                                    <strong>Applied On:</strong> {convertDateFormat(applicationDetails.createdAt.substr(0, 10))} at {extractTime(applicationDetails.createdAt)}
                                </div>
                            </div>
                        </div>

                        {/* Delete Button */}
                        <div className='text-center'>
                            <button onClick={deleteApplicationHandler} className='bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition'>
                                {loading ? <TbLoader2 className='animate-spin mx-auto' size={24} /> : "Delete Application"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
