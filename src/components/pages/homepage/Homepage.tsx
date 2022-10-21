import React ,{useEffect}from 'react'
import Icon from '../../smallcomponent/icon/icon'
import Link from '../../smallcomponent/link/link'
import './homepage.css'
export default function Homepage() {
     useEffect(()=>{
        document.title='galeri | homepage'
     },[])
  return (
    <div className='link-website'>
      <h3 className='text-center text-light'>galeri</h3>
        <Link 
          href={'https://initer3737.github.io/newyear/#partnership'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' new years'}/>
        </Link>
        <Link 
          href={'https://initer3737.github.io/tokokita.com'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' tokokita.com'}/>
        </Link>
        <Link 
          href={'https://initer3737.github.io/tongkronganku'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' tongkronganku'}/>
        </Link>
        <Link 
          href={'https://initer3737.github.io/bokunokanji'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' bokunokanji'}/>
        </Link>
        <Link 
          href={'https://initer3737.github.io/colorPicker'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' colorpicker'}/>
        </Link>
        <Link 
          href={'https://initer3737.github.io/cybersales.com'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' cybersales.com'}/>
        </Link>
        <Link 
          href={'https://initer3737.github.io/course/#/course'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' course'}/>
        </Link>
        <Link 
          href={'https://initer3737.github.io/'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' about'}/>
        </Link>
        <Link 
          href={'https://initer3737.github.io/kalkulator'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' kalkulator'}/>
        </Link>
        <Link 
          href={'https://initer3737.github.io/todolist-js'} 
          target={'_blank'}>
            <Icon icon={'browser-edge'} name={' todo-list'}/>
        </Link>
    </div>
  )
}
