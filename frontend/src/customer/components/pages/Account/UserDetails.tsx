import React from 'react'
import ProfileFieldCard from '../../../../component/ProfileFieldCard'
import { Divider } from '@mui/material'

const UserDetails = () => {
  return (
    <div className='flex justify-center py-10'>
        <div className='w-full lg:w-[70%]'>
            <div className='flex items-center pb-3 justify-between'>
                <h1 className='2xl font-bold text-gray-600'>Persnoal Deatils</h1>

            </div>
            <div className=''>
              <ProfileFieldCard keys="Name" value={"ZOSH"}/>
              <Divider/>
              <ProfileFieldCard keys="email" value={"zosh@gmail.com"}/>
              <Divider/>
              <ProfileFieldCard keys="Mobile" value={"8987728299"}/>
            </div>
        </div>
      
    </div>
  )
}

export default UserDetails
