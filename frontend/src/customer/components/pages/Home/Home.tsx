import React from 'react'
import ElectricCategoryCard from './ElectricCategory/ElectricCategoryCard'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from '../CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import { Button } from '@mui/material'
import { Storefront } from '@mui/icons-material'

const Home = () => {
  return (
    <>
      <div className='space-y-5 lg:space-y-10 relative pb-20'>
            <ElectricCategory/>
            <CategoryGrid/>

            {/* Deals */}
           
            <div className='pt-20'>
              <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center'>TODAY"S DEAL</h1>
              <Deal/>
            </div>


          {/* category */}
            <section className='py-20'>
              <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center'>SHOP BY CATEGORY</h1>
              <ShopByCategory />
            </section>

         
          <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
            <img className='w-full h-full' src="data:image/jpeg;base64,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" alt="" />
          <div className='absolute top-1/2 left-4 lg:left-[15rem] transform
  -translate-y-1/2 font-semibold lg:text-4xl space-y-3'>

          <h1>Sell your Product</h1>
          <p className='text-lg md:text-2xl'>With <span className='bg-white logo'>Zosh Bazzar</span></p>
            <div className='pt-6 flex justify-center'>
              <Button startIcon={<Storefront/>} variant='contained'size='large'>
                Become Seller
              </Button>
            </div>
          </div>
      </section>

      </div>
    </>
  )
}

export default Home
