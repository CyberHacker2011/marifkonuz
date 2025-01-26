import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
const AboutPage = () => {
  
  const dosome = ()=>{
    let res = 0;
    for(let i =0;i<=1000; i++ ){
      i=i**2
      res*=i
    }
    return res
  }
  dosome();
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-2 p-5'>
          <div className='flex flex-col gap-2 px-10 py-5 justify-center text-gray-900'>
            <h1 className='text-3xl font-bold '>What is <q>Marifkon<sub>uz</sub></q> and who works there</h1>
            <p className='font-sans text-lg'>
              Our project is designed to provide educational resources, courses and informations on various topics. Here, you can find valuable knowledge ranging from basic shool subjects to additional extracurricular studies and beyond.
            </p>
            <div>
              
            <p className='font-sans text-lg'>
            Our team contains school students from Uzbekistan. They are:
            </p>
            <ul className='font-mono font-bold ml-2 text-lg'>
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