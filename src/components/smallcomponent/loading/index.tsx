import  { useEffect ,useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import logo from '../../../assets/404.gif'
import './loading.css'
import weejio1 from '../../../assets/giyu-and-shinobu-sakura-bridge-kimetsu-no-yaiba-moewalls.com.mp4'
export default function Loading() {
  const [transition,setTransition]=useState(3)
  const navigate=useNavigate()
  const {url}=useParams()
  useEffect(()=>{
    document.title='galeri | notfound 404'
    const transitionCounter=setInterval(()=>{
      if(transition>0)setTransition(prev=>prev-1)
    },1000)
    const counterNavigate=setTimeout(()=>{
       if(url === 'home'){
          navigate(`/`)
       }else{
          navigate(`/${url}`)
       }
    },3000)
    return ()=>{
      clearTimeout(counterNavigate)
      clearInterval(transitionCounter)
    }
  },[transition,navigate,url])
  return (
    <div className=''>
      <video src={weejio1} className='weejio-begeh' autoPlay loop muted></video>
      <div className="wrapper-404">
        <img src={logo} alt='not found!'/>
        <h3>Loading {transition}</h3>
      </div>
    </div>
  )
}
