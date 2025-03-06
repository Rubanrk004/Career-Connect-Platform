import React, { useEffect, useState } from 'react';
import { MetaData } from '../components/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUnlock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { TbLoader2 } from 'react-icons/tb';
import { deleteAccount } from '../actions/UserActions';
import { Checkbox } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const DeleteAccount = () => {
  const { loading, isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [eyeTog, setEyeTog] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteAccount({ password }));
    setPassword('');
  };

  return (
    <>
      <MetaData title="Delete Account" />
      <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen pt-20 flex justify-center items-center text-white px-4">
        <div className="bg-gray-900 shadow-lg border border-gray-800 p-8 md:w-1/3 w-full rounded-lg">
          <h2 className="text-center text-4xl font-bold text-red-500 pb-5 border-b border-gray-700">
            Delete Account
          </h2>

          <form onSubmit={deleteHandler} className="flex flex-col gap-5 pt-5">
            {/* Password Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <AiOutlineUnlock size={20} />
              </div>
              <input
                type={eyeTog ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full bg-gray-800 text-white px-10 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                onClick={() => setEyeTog(!eyeTog)}
              >
                {eyeTog ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
              </div>
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-start gap-3">
              <Checkbox
                checked={confirm}
                onChange={() => setConfirm(!confirm)}
                className="cursor-pointer"
              />
              <p className="text-gray-400">
                <span className="font-semibold text-red-400">Warning:</span> Deleting your account is
                permanent and cannot be undone. Are you sure?
              </p>
            </div>

            {/* Delete Button */}
            <button
              type="submit"
              disabled={loading || !confirm}
              className={`w-full py-2 flex justify-center items-center font-semibold rounded-md transition duration-300 ${
                loading || !confirm
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              {loading ? <TbLoader2 className="animate-spin" size={24} /> : 'Delete Account'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
