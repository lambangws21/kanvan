import { AtSymbolIcon, BellIcon, EyeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Image from 'next/image'

function TopBar() {
  return (
    <div className='h-10 pl-40 fixed bg-gradient-to-r from-purple-300 to to-blue-500 w-full flex items-center justify-between pr-5'>

        <div className='flex px-5 items-center'>
            <EyeIcon className='w-5 h-5 text-white'/>
        <input type='text' placeholder='Seacrh for schedule...' className='bg-transparent border-0 text-white placeholder-gray-200 outline-none focus:ring-0 '/>
        </div>
        <div className='flex space-x-5'>
            <AtSymbolIcon className='w-7 h-7 text-white'/>
            <BellIcon className='w-7 h-7 text-white'/>
            <div className='flex items-center text-white space-x-4'>
                <h3 className='font-semibold mr-1'>Herlambang</h3>
                <Image src="https://randomuser.me/api/portraits/men/15.jpg" width="36" height="36" objectFit='cover ' alt='user' className='rounded-full'/>
            </div>
        </div>
   
    </div>
  )
}

export default TopBar