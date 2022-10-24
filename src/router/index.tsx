import React, { useEffect } from 'react'
import './router.css'
import { 
  Routes as Switch ,
  Route,
  Navigate
} from 'react-router-dom'

import {
  Homepage
} from '../components/pages'

import { 
  ScrollToTop ,
  Nav,
  NotFound
} from '../components/smallcomponent'
import theme from '../assets/theme.mp3'
export default function Routes() {
  useEffect(()=>{
    let audio=new Audio(theme);
    audio.loop=true
    audio.volume=0.4
    audio.play()
  },[])
  return (
   <div className='router-container'>
    <>
      <ScrollToTop/>
      <Nav/>
    </>
    <>
        <Switch>
         <Route path='/' element={<Homepage/>}/>
         <Route path='/404' element={<NotFound/>}/>
         <Route path='*' element={<Navigate replace to={'/404'}/>}/>
        </Switch>
    </>
   </div>
  )
}
