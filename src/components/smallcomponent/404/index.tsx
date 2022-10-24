import React, { useEffect } from 'react'
import logo from '../../../assets/404.gif'
import './404.css'
export default function NotFound() {
  useEffect(()=>{
    document.title='galeri | notfound 404'
  },[])
  return (
    <div className='wrapper-404'>
      <img src={logo} alt='not found!'/>
      <h3>not found!</h3>
    </div>
  )
}
