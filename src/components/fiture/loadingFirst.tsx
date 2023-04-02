import React,{ useState} from 'react'
// import Loadinggif from '../../assets/loading.gif'
import './fiture.css'
import weejio1 from '../../assets/giyu-and-shinobu-sakura-bridge-kimetsu-no-yaiba-moewalls.com.mp4'
  type props={time:number}
export default function LoadingFirst({time}:props) {
  let [loadingHandler,setLoadinghandler]=useState('loading')
   const styleimg={
    width:'25vw'
   }
   let load=setInterval(()=>{
    setLoadinghandler(loadingHandler+'.')
   },time)
   setTimeout(()=>{
    //clear the load inter val affter finish loading
    clearInterval(load);
   },time)
  return (
    <div className="">
      <video src={weejio1} className='weejio-begeh' autoPlay loop muted></video>
      {/* <img src={Loadinggif} alt=""style={styleimg}/> */}
      <p className='loading-first-text text-light text-center animate-loading'>{loadingHandler}</p>
    </div>
  )
}
