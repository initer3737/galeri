import React from 'react'
type props={
    icon:string,
    name:string,
    onClick?:any,
}
export default function Icon({icon,name,onClick}:props) {
  return (
    <i className={`bi bi-${icon}`} onClick={onClick}>{name}</i>
  )
}
