import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import Button from './Button';
import { AppContext } from '../ContextProvider/AppContext';
import icon from '@/assets/profile_icon.png'
import logout from '@/assets/logout_icon.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({setLogin}) => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Service",link:"/service"},
      {name:"About",link:"/about"},
      {name:"Contact",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
    const {token,setToken}=useContext(AppContext)
    const navigate=useNavigate()
    const Logout =()=>{
        localStorage.removeItem('token')
        setToken('')
        toast.success('Logged out successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate('/')

    }


  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <Link to='/'> <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
       <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span> 
        Sri indu
      </div></Link>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <div className='profile mx-3'>
          {!token?<button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 ' onClick={()=>setLogin(true)}  >SignUp</button>
       : <div className='navbar-profile'>
          <img src={icon} alt="icon" />
          <ul className='nav-profile-dropdown'>
            <li><span>Kalyan</span></li>
            <hr />
            <li onClick={Logout} ><img   src={logout} alt="logout" /><p>Logout</p></li>
          </ul>
       </div>
       }
        </div>
       
      </ul>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Navbar