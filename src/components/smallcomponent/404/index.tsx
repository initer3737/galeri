import React, { useEffect } from 'react'

export default function NotFound() {
  useEffect(()=>{
    document.title='galeri | notfound 404'
  },[])
  return (
    <div>NotFound</div>
  )
}
