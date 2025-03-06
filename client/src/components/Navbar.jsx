import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Menu } from '@mantine/core';
import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { MdWork, MdDashboard, MdHelpOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { logOrNot } from '../actions/UserActions';
import { logoutClearState } from '../slices/UserSlice';
import { motion } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';

export const Navbar = () => {
    const { isLogin, me } = useSelector(state => state.user);
    const [menuOpen, setMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('role');
        dispatch(logOrNot());
        dispatch(logoutClearState());
        navigate('/');
        toast.success("Logged out successfully");
    };

    return (
        <header className='fixed top-0 w-full bg-gray-900 text-white shadow-md z-50'>
            <div className='flex justify-between items-center px-6 py-4 max-w-7xl mx-auto'>
                {/* Logo */}
                <Link to="/" className='text-2xl font-bold flex items-center gap-2 hover:text-blue-400 transition'>
                    <MdWork size={26} className="text-blue-400" /> Career Connect
                </Link>

                {/* Desktop Navigation */}
                {!isMobile && (
                    <nav>
                        <ul className='hidden md:flex space-x-8 text-lg font-medium'>
                            <Link to="/" className='hover:text-blue-400 transition'>Home</Link>
                            <Link to="/jobs" className='hover:text-blue-400 transition'>Jobs</Link>
                            <Link to='/about' className='hover:text-blue-400 transition'>About</Link>
                            <Link to='/contact' className='hover:text-blue-400 transition'>Contact</Link>
                            <Menu shadow="md" width={160}>
                                <Menu.Target>
                                    <span className='cursor-pointer hover:text-blue-400 transition'>Resources ▼</span>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Link to="/blog"><Menu.Item icon={<MdHelpOutline size={16} />}>Career Blog</Menu.Item></Link>
                                    <Link to="/mentorshipProgram"><Menu.Item icon={<MdDashboard size={16} />}>Mentorship</Menu.Item></Link>
                                </Menu.Dropdown>
                            </Menu>
                        </ul>
                    </nav>
                )}

                {/* User Profile & Mobile Menu */}
                <div className='flex items-center gap-4'>
                    {isLogin ? (
                        <Menu shadow="md" width={200}>
                            <Menu.Target>
                                <Avatar className='cursor-pointer' radius="xl" src={me.avatar.url} alt="Profile" />
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Link to="/profile"><Menu.Item icon={<FaUserCircle size={16} />}>My Profile</Menu.Item></Link>
                                {me.role === "admin" && <Link to="/admin/dashboard"><Menu.Item icon={<MdDashboard size={16} />}>Dashboard</Menu.Item></Link>}
                                <Menu.Item onClick={handleLogout} color="red" icon={<FaSignOutAlt size={16} />}>Logout</Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    ) : (
                        <div className='hidden md:flex space-x-4'>
                            <Link to="/login" className='px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition'>Login</Link>
                            <Link to="/register" className='px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition'>Register</Link>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <div className='md:hidden cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <RxCross1 size={28} /> : <FaBars size={28} />}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -50 }}
                transition={{ duration: 0.3 }}
                className={`absolute top-20 right-10 left-10 w-half bg-gray-900 text-center py-6 ${menuOpen ? 'block' : 'hidden'}`}
            >
                <ul className='space-y-6 text-xl font-medium'>
                    <Link to="/" className='block hover:text-blue-400' onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/jobs" className='block hover:text-blue-400' onClick={() => setMenuOpen(false)}>Jobs</Link>
                    <Link to='/about' className='block hover:text-blue-400' onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to='/contact' className='block hover:text-blue-400' onClick={() => setMenuOpen(false)}>Contact</Link>
                    <Link to='/blog' className='block hover:text-blue-400' onClick={() => setMenuOpen(false)}>Career Blog</Link>
                    <Link to='/mentorshipProgram' className='block hover:text-blue-400' onClick={() => setMenuOpen(false)}>Mentorship</Link>
                </ul>

                {!isLogin && (
                    <div className='mt-6 flex flex-col gap-3'>
                        <Link to="/login" className='px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition'>Login</Link>
                        <Link to="/register" className='px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition'>Register</Link>
                    </div>
                )}
            </motion.div>
        </header>
    );
};
