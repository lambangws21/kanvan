import React from 'react'
import { ArchiveBoxArrowDownIcon, BeakerIcon, CalendarIcon, ChatBubbleBottomCenterIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import { Chathura } from 'next/font/google'

function SideBar(props) {
  return (
    <div className='fixed inset-y-0 left-0 bg-white w-40'>
        <h3 className='flex items-center justify-center text-xl h-10 bg-purple-600 text-purple-50 font-extrabold'>Os</h3>
        <ul className='flex flex-col text-lg flex-1 h-full '>
            <li className='flex justify-center items-center flex-col py-5 border-gray-500 text-gray-500'>
                <BeakerIcon className='w-8 h-8 '/> Teams
            </li>
            <li className='flex justify-center items-center flex-col py-5 border-l-4 border-purple-500 text-purple-400 font-bold'>
                <CalendarIcon className='w-8 h-8 '/> Schedule
            </li>
            <li className='flex justify-center items-center flex-col py-5 border-gray-500 text-gray-500'>
                <ChatBubbleBottomCenterIcon className='w-8 h-8 '/> Chat
            </li>
            <li className='flex justify-center items-center flex-col py-5 border-gray-500 text-gray-500'>
                <ArchiveBoxArrowDownIcon className='w-8 h-8 '/> Boards
            </li>
            <li className='flex justify-center items-center flex-col py-5 border-gray-500 text-gray-500 mt-auto mb-16'>
                <Cog6ToothIcon className='w-8 h-8 '/> Setting
            </li>
            
        </ul>
    </div>
  )
}

export default SideBar