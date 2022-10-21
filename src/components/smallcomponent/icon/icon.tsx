import React from 'react'
type props={
    icon:string,
    name:string
}
export default function Icon({icon,name}:props) {
  return (
    <i className={`bi bi-${icon}`}>{name}</i>
  )
}
