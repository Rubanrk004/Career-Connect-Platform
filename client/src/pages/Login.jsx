import React, { useEffect, useState } from 'react';
import { MetaData } from '../components/MetaData';
import { AiOutlineMail, AiOutlineUnlock, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { TbLoader2 } from 'react-icons/tb';
import { loginUser } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
  const { loading, isLogin } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyeTog, setEyeTog] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return (
    <>
      <MetaData title="Login" />
      <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-gray-900 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Welcome Back</h2>
          
          <form onSubmit={loginHandler} className="flex flex-col gap-4">
            
            {/* Email Input */}
            <div className="relative">
              <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <AiOutlineUnlock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={eyeTog ? 'text' : 'password'}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                {eyeTog ? (
                  <AiOutlineEye size={20} onClick={() => setEyeTog(!eyeTog)} />
                ) : (
                  <AiOutlineEyeInvisible size={20} onClick={() => setEyeTog(!eyeTog)} />
                )}
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading || !email || !password}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md flex justify-center items-center transition-all"
            >
              {loading ? <TbLoader2 className="animate-spin" size={24} /> : 'Login'}
            </button>

            {/* Register Link */}
            <p className="text-center text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-yellow-400 hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
