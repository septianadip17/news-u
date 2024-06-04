import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-1'>
      <Link href="/">
        <div className="relative w-[200px] h-[50px]">
          <Image src="/img/news-u-logo.webp" alt="news-u-logo" fill sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw'className='object-contain'/>
        </div>
      </Link>
      {/* SearchInput */}
    </div>
  )
}

export default Header