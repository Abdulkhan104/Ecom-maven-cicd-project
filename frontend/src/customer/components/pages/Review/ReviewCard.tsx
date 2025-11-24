import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, Grid2, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
       
       <Grid2 container spacing={10}>

          <Grid2 size={{ xs:1 }}>

            <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155FD"}}>
                   Z
                </Avatar>
            </Box>
          </Grid2>

          <Grid2 size={{xs:9}}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg'>Zosh</p>
                    <p className='opacity-70'>2025-03-27T23:16:07.478333</p>
                </div>
            </div>

            <Rating
            readOnly
            value={4}
            precision={1}
            />
            <p>value for money product, great product Organzaa</p>

            <div>
                <img 
                className='w-24 h-24 object-cover'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0nZNrhWF6MRNixMHnqMlSjOiUsBHCvdnWQ&s" alt="" />
            </div>

          </Grid2>

       </Grid2>

<div>
       <IconButton>
         <Delete sx={{color:red[200]}}/>  
     </IconButton>
     </div>

    </div>
  )
}

export default ReviewCard
