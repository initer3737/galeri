import React,{useEffect, useState} from 'react'
import Loadinggif from '../../assets/loading.gif'
import './fiture.css'

  type props={time:number}
export default function Loading({time}:props) {
  let [loadingHandler,setLoadinghandler]=useState('loading')
   const styleimg={
    width:'25vw'
   }
   setInterval(()=>{
    setLoadinghandler(loadingHandler+'.')
   },time)
  return (
    <div className="">
      <img src={Loadinggif} alt=""style={styleimg}/>
      <p className='text-light text-center animate-loading'>{loadingHandler}</p>
    </div>
  )
}
