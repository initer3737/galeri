import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/404.gif'
import './404.css'
import weejio1 from '../../../assets/giyu-and-shinobu-sakura-bridge-kimetsu-no-yaiba-moewalls.com.mp4'
export default function NotFound() {
  const navigate=useNavigate()
  useEffect(()=>{
    document.title='galeri | notfound 404'
  },[])
  return (
    <div className=''>
      <video src={weejio1} className='weejio-begeh' autoPlay loop muted></video>
      <div className="wrapper-404">
        <img src={logo} alt='not found!'/>
        <h3 onClick={()=>{
            navigate('/loading/home')
            
        }}>back to home</h3>
      </div>
    </div>
  )
}
