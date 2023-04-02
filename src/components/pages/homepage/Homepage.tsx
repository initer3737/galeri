import React ,{useEffect,useState}from 'react'
import Icon from '../../smallcomponent/icon/icon'
import Link from '../../smallcomponent/link/link'
import './homepage.css'
import weejio1 from '../../../assets/giyu-and-shinobu-sakura-bridge-kimetsu-no-yaiba-moewalls.com.mp4'
import weejio2 from '../../../assets/giyu-water-hashira-kimetsu-no-yaiba-moewalls.com.mp4'
import weejio3 from '../../../assets/kokushibo-upper-rank-one-kimetsu-no-yaiba-moewalls.com.mp4'
import weejio4 from '../../../assets/muichiro-tokito-mist-breathing-kimetsu-no-yaiba-moewalls.com.mp4'
import weejio5 from '../../../assets/muzan-kibutsuji-kimetsu-no-yaiba-moewalls.com.mp4'
import weejio6 from '../../../assets/nezuko-umbrella-butterfly-kimetsu-no-yaiba-moewalls.com.mp4'
export default function Homepage() {
  let [sliderCount,setSliderCount]=useState(0)
  const weejioPacks=[
    weejio1,weejio2,weejio3,weejio4,weejio5,weejio6
  ]
     useEffect(()=>{
        document.title='galeri | homepage'
        const sliderTimmer=setInterval(()=>{
            
            setSliderCount(sliderCount+1)
            if(sliderCount >= weejioPacks.length-1)setSliderCount(0)
        },3000)
        return ()=>{
          clearInterval(sliderTimmer)
        }
     },[sliderCount])
  return (
    <div className="transition-slider">
      <video src={weejioPacks[sliderCount]} className='weejio-begeh' autoPlay loop muted></video>
      <div className={sliderCount===1?'link-website-giyu':'link-website'}>
      <h3 className='text-center text-light'>galeri {sliderCount}</h3>
        <Link 
          isLinkToPage={true}
          href={'https://initer3737.github.io/newyear/#partnership'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' new years'}/>
        </Link>
        <Link 
          isLinkToPage={true}
          href={'https://initer3737.github.io/tokokita.com'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' tokokita.com'}/>
        </Link>
        <Link
          isLinkToPage={true} 
          href={'https://initer3737.github.io/tongkronganku'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' tongkronganku'}/>
        </Link>
        <Link 
          isLinkToPage={true}
          href={'https://initer3737.github.io/bokunokanji'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' bokunokanji'}/>
        </Link>
        <Link
          isLinkToPage={true} 
          href={'https://initer3737.github.io/colorPicker'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' colorpicker'}/>
        </Link>
        <Link
          isLinkToPage={true} 
          href={'https://initer3737.github.io/cybersales.com'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' cybersales.com'}/>
        </Link>
        <Link 
          isLinkToPage={true}
          href={'https://initer3737.github.io/course/#/course'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' course'}/>
        </Link>
        <Link
          isLinkToPage={true} 
          href={'https://initer3737.github.io/'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' about'}/>
        </Link>
        <Link 
          isLinkToPage={true}
          href={'https://initer3737.github.io/kalkulator'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' kalkulator'}/>
        </Link>
        <Link 
          isLinkToPage={true}
          href={'https://initer3737.github.io/todolist-js'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' todo-list'}/>
        </Link>
        <Link 
          isLinkToPage={true}
          href={'https://initer3737.github.io/storage'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' showcase'}/>
        </Link>
    </div>
    </div>
  )
}
