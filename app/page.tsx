import React from 'react'
import Image from 'next/image'
import Button from './(components)/button'
const HomePage = function () {
  return (
    <>
      <div className='relative w-full h-124 opacity-90 bg-black'>
        <Image 
          src={'/education.jpg'}
          alt='Image of education for Marifkonuz'
          loading={'lazy'}
          layout='fill'
        />
        <div className='absolute w-full h-full bg-black opacity-70'></div>\
        <div className='absolute flex flex-col gap-y-6 w-full h-full px-20 py-12'>
          <h1 className='text-6xl font-bold text-gray-100 font-sans '>
            Learning today,<br />
            Leading tomorrow
          </h1>
          <p className='text-xl font-light text-white'>
            Our team Marifkon<sub>uz</sub> is here to help reach your goals and learning.
          </p> 
          <Button href='/login' version='link' size="lg" color='transparent' className='inline-block border-2 border-white rounded-3xl '>Get started</Button>
        </div>
      </div>

      
    </>
  )
}


export default HomePage