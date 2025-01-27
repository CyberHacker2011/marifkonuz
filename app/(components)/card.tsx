import Link from 'next/link'
import React from 'react'
import Image from 'next/legacy/image'
const Card = () => {
  return (
    <>
        <div className='grid grid-rows-5 max-w-80 max-h-124 shadow-lg '>
            <div className='relative row-span-3 flex flex-col gap-2 justify-center items-center'>
                <Image
                    src={'/education.jpg'}
                    alt='Picture for thumbnail'
                    layout="fill"
                    priority={true}
                    className="object-cover"
                />
            </div>
            <div className='row-span-2 flex flex-col gap-2 py-7 px-5'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-xl font-bold'>
                        Name of Guy
                    </p>
                    <p className='text-sm text-gray-700'>
                        Web developer
                    </p>
                </div>
                
                <span className='text-gray-600'>
                    Good boy with good experience on programming and owner of marifkonuz because of his good leadership skills.
                </span>
                <div className='flex items-center justify-center gap-2'>
                    <Link href={'https://x.com'} className='opacity-80 hover:opacity-60'>
                        <Image
                        src={'/twitter.svg'}
                        alt='twitter logo'
                        width={20}
                        height={20}
                        />
                    </Link>
                    <Link href={'https://t.me'} className='opacity-80 hover:opacity-60'>
                        <Image
                        src={'/telegram.svg'}
                        alt='telegram logo'
                        width={20}
                        height={20}
                        />
                    </Link>
                    <Link href={'https://linkedin.com'} className='opacity-80 hover:opacity-60'>
                        <Image
                        src={'/linkedin.svg'}
                        alt='linkedin logo'
                        width={20}
                        height={20}
                        />
                    </Link>
                    <Link href={'https://youtube.com'} className='opacity-80 hover:opacity-60'>
                        <Image
                        src={'/youtube.svg'}
                        alt='youtube logo'
                        width={20}
                        height={20}
                        />
                    </Link>
                    
                </div>
            </div>
            

        </div>
    </>
    )
}

export default Card