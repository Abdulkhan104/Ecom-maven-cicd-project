import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[10rem] cursor-pointer'>
        <img
        className='border-x-[7px] border-t-[7px]
         border-pink-600 w-full h-[12rem] object-cover object-top object-fit: cover;'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBql8gIth1gki8Vgrsla75ahUSFjvRNT9Tig&s" alt="" />
        <div className='border-4 border-black bg-black text-white p-2 text-center'>
            <p className='text-lg font-semibold'>Smart Watch</p>
            <p className='text-2xl font-bold'>20% OFF</p>
            <p className='text-balance text-lg'>shop</p>
        </div>
    </div>
  )
}

export default DealCard
