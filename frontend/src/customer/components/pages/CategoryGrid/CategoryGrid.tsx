import React from 'react'

const CategoryGrid = () => {
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
        <div className='col-span-3 row-span-12 text-white'>
            <img
            className='w-full h-full object-cover object-top rounded-md'
            src="https://img-cdn.thepublive.com/filters:format(webp)/elle-india/media/post_attachments/wp-content/uploads/2024/01/Snapinsta.app_403954411_660895866160793_4155553336658434605_n_1080.jpg" alt="" />

        </div>
        <div className='col-span-2 row-span-6 text-white'>
            <img 
         className='w-full h-full object-cover object-top rounded-md'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciKesM_MFtTAIMgs72Rl3orWkn6ipGvKFFQ&s" alt="" />

        </div>

        <div className='col-span-4 row-span-6 text-white'>
            <img 
            className='w-full h-full object-cover object-top rounded-md' 
            src="https://rmkv.com/cdn/shop/articles/choose_best_wedding_saree_color_4e39c8c2-2d61-45f8-a2a5-d8d9569d8180.png?v=1734090159" alt="" />

        </div>

        <div className='col-span-3 row-span-12 text-white'>
            <img 
             className='w-full h-full object-cover object-top rounded-md'  
            src="https://cdn.shopaccino.com/mr-ajay-kumar/products/10a-411117_l.png?v=523" alt="" />

        </div>

        <div className='col-span-4 row-span-6 text-white'>
            <img 
            className='w-full h-full object-cover object-top rounded-md'
            src="https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/826/931/new_medium/cover_image_1.jpg?1685094750" alt="" />

        </div>

        <div className='col-span-2 row-span-6 text-white'>
            <img 
            className='w-full h-full object-cover object-top rounded-md'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU8O4GR8mMu1mdTjrknV9dNSfyPP4_ZA6_g&s" alt="" />

        </div>
    </div>
  )
}

export default CategoryGrid
