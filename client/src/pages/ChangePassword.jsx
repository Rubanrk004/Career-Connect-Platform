import React, { useState } from 'react';
import { MetaData } from '../components/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUnlock, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { MdOutlineVpnKey } from 'react-icons/md';
import { TbLoader2 } from 'react-icons/tb';
import { changePass } from '../actions/UserActions';

export const ChangePassword = () => {
    const { loading } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [eyeTog, setEyeTog] = useState({
        old: false,
        new: false,
        confirm: false
    });

    const toggleVisibility = (field) => {
        setEyeTog(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const changeHandler = (e) => {
        e.preventDefault();
        dispatch(changePass({ oldPassword, newPassword, confirmPassword }));

        if (!loading) {
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <>
            <MetaData title="Change Password" />
            <div className="bg-gradient-to-b from-gray-800 to-black  min-h-screen flex items-center justify-center px-4">
                <div className="bg-gray-900 shadow-lg rounded-lg p-8 md:w-1/3 w-full text-white">
                    <h2 className="text-3xl font-semibold text-center border-b border-gray-700 pb-4">Change Password</h2>
                    <form onSubmit={changeHandler} className="mt-6 flex flex-col gap-5">
                        
                        {/* Old Password */}
                        <div className="relative">
                            <input
                                type={eyeTog.old ? "text" : "password"}
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                                placeholder="Old Password"
                                className="w-full pl-10 px-4 py-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            <MdOutlineVpnKey className="absolute left-3 top-3 text-gray-600" size={20} />
                            <div className="absolute right-3 top-3 text-gray-600 cursor-pointer" onClick={() => toggleVisibility('old')}>
                                {eyeTog.old ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                            </div>
                        </div>

                        {/* New Password */}
                        <div className="relative">
                            <input
                                type={eyeTog.new ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                placeholder="New Password"
                                className="pl-10 w-full px-4 py-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            <AiOutlineUnlock className="absolute left-3 top-3 text-gray-600" size={20} />
                            <div className="absolute right-3 top-3 text-gray-600 cursor-pointer" onClick={() => toggleVisibility('new')}>
                                {eyeTog.new ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <input
                                type={eyeTog.confirm ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder="Confirm Password"
                                className="w-full pl-10 px-4 py-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            <AiOutlineLock className="absolute left-3 top-3 text-gray-600" size={20} />
                            <div className="absolute right-3 top-3 text-gray-600 cursor-pointer" onClick={() => toggleVisibility('confirm')}>
                                {eyeTog.confirm ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 rounded-md font-semibold text-white flex justify-center items-center transition ${
                                loading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                        >
                            {loading ? <TbLoader2 className="animate-spin" size={24} /> : "Change Password"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
