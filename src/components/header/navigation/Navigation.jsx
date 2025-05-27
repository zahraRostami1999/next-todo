import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <div className='flex justify-center items-center'>
      <ul className='flex justify-around items-center w-1/3 font-bold text-xl'>
        <li className=''><Link href="/today">Today</Link></li>
        <li className=''><Link href="/week">Week</Link></li>
      </ul>
    </div>
  )
}

export default Navigation;