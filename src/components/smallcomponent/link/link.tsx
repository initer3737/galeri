import React from 'react'
import select from '../../../assets/select.mp3'
import click from '../../../assets/click.mp3'
import click2 from '../../../assets/click2.mp3'
type props={
  target:string,
  href:string,
  children:JSX.Element
}
export default function Link({target,children,href}:props) {
  return (
    <a href={href} target={target} onMouseEnter={()=>{
        var audio=new Audio(select)
        audio.play()
    }}
    onClick={()=>{
      var audio=new Audio(click2)
        audio.play()
    }}
    >
      {children}
    </a>
  )
}
