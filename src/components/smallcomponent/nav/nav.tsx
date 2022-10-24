import React from 'react'
import Icon from '../icon/icon'
import Link from '../link/link'

export default function Nav() {
  return (
    <div className='link-website'>
      <h3 className="text-center text-light">
        navigasi
      </h3>
      <Link isLinkToPage={false} target={''} href={'/#/'}>
        <Icon icon={'file-text'} name={'page'}/>
      </Link>
      <Link isLinkToPage={false} target={''} href={''}>
        <Icon icon={'file-text'} name={'galeri'}/>
      </Link>
      <Link isLinkToPage={false} target={''} href={''}>
        <Icon icon={'file-text'} name={'galeri'}/>
      </Link>
    </div>
  )
}
