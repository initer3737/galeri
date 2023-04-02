import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/404.gif'
import './404.css'
import weejio1 from '../../../assets/giyu-and-shinobu-sakura-bridge-kimetsu-no-yaiba-moewalls.com.mp4'
export default function NotFound() {
  useEffect(()=>{
    document.title='galeri | notfound 404'
  },[])
  return (
    <div className=''>
      <video src={weejio1} className='weejio-begeh' autoPlay loop muted></video>
      <div className="wrapper-404">
        <img src={logo} alt='not found!'/>
        <NavLink to={'/loading/home'} className='back-to-home'>back to home</NavLink>
      </div>
    </div>
  )
}
