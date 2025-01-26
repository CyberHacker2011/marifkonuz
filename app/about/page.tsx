import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
const AboutPage = () => {
  
  return (
    <>
        <div className='grid lg:grid-rows-1 grid-rows-2 grid-cols-1 lg:grid-cols-2 p-5 gap-3'>
          <div className='flex flex-col gap-2 px-3 md:px-10 py-5  items-center justify-center text-start text-gray-900'>
            <h1 className=' text-2xl md:text-3xl font-bold '>What is <q>Marifkon<sub>uz</sub></q> and who works there</h1>
            <p className='font-sans text-base md:text-lg'>
              Our project is designed to provide educational resources, courses and informations on various topics. Here, you can find valuable knowledge ranging from basic shool subjects to additional extracurricular studies and beyond.
            </p>
            <div>
              
            <p className='font-sans text-base md:text-lg'>
            Our team contains school students from Uzbekistan. They are:
            </p>
            <ul className='font-mono font-bold ml-2 tet-sm md:text-lg'>
                <li >
                  <Link className='hover:text-blue-400 inline-block' href={'https://t.me/i11tech'}>Ibrohim</Link>
                </li>
                <li >
                  <Link className='hover:text-blue-400 inline-block' href={'https://t.me/Whoiam720'}>Daler</Link>
                </li>
                <li >
                  <Link className='hover:text-blue-400 inline-block' href={'https://t.me/KasimovSaidmuhammad'}>Saidmuhammad</Link>
                </li>
                <li >
                  <Link className='hover:text-blue-400 inline-block' href={'https://t.me/Diyorbek_Qobilov'}>Diyorbek</Link>
                </li>
                <li >
                  <Link className='hover:text-blue-400 inline-block' href={'https://t.me/KholboyevAsadbek'}>Asadbek</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='relative'>
            <Image
              src={'/education.jpg'}
              alt='Picture of our group'
              layout='fill'
              priority={true}
            />
          </div>
          
        </div>
    </>
  )
}

export default AboutPage