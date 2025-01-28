import React from 'react'
import Link from 'next/link'
const Post = () => {
  return (
    <>
        <Link href={`/${1}`} >
            <div className='flex shadow-lg px-4 py-5 flex-col gap-2'>
                <div className='flex flex-col items-center justify-center'>  
                    <h1 className='text-2xl font-bold '>Post title</h1>
                    <p className='font-thin '>Post author</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint omnis veniam suscipit, ea praesentium pariatur molestias eligendi temporibus maxime, nostrum delectus repudiandae similique velit sequi porro non eum, qui cum.
                </p>
            </div>
        </Link>
    </>
  )
}

export default Post