import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../public/logo.jpeg'
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user,logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="navbar bg-primary text-white flex flex-col lg:flex-row">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black bg-opacity-50">
      <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/colleges'}>Colleges</Link></li>
            <li><Link to={'/admission'}>Admission</Link></li>
            <li><Link to={'/my-colleges'}>My-colleges</Link></li>
      </ul>
    </div>
                    <Link><img className='w-24' src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-lg">
      <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/colleges'}>Colleges</Link></li>
            <li><Link to={'/admission'}>Admission</Link></li>
            <li><Link to={'/my-colleges'}>My-colleges</Link></li>
    </ul>
  </div>
                {
                    user?<div className="navbar-end flex gap-4 text-white">
                    <div className='w-14'><img className='rounded-full' title={user.displayName} src={user.photoURL} alt="" /></div>
    <Link onClick={handleLogout} className="button-primary border-2">Logout</Link>
  </div>:<div className="navbar-end"><Link to={'/login'} className="btn">Login</Link></div>
                }
</div>
        </div>
    );
};

export default Navbar;