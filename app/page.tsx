import React from 'react'
import Image from 'next/legacy/image'
import Button from './(components)/button'
const HomePage = function () {
  return (
    <>
      <div className='relative w-full h-96 md:h-124 opacity-90 bg-black'>
        <Image 
          src={'/education.jpg'}
          alt='Image of education for Marifkonuz'
          layout='fill'
          priority={true}
        />
        <div className='absolute w-full h-full bg-black opacity-70'></div>\
        <div className='absolute flex flex-col gap-y-8 w-full h-full px-12 py-8 md:px-20 md:py-12'>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-100 font-sans '>
            Learning today,<br />
            Leading tomorrow
          </h1>
          <p className='text-xl font-light text-white'> 
            Our team <b>Marifkon<sub>uz</sub></b> is here to help reach your goals and learning.
          </p> 
          <Button href='/login' version='link' size="lg" color='transparent' className=' border-2 border-white rounded-2xl '>Get started</Button>
        </div>
      </div>

      
    </>
  )
}


export default HomePage