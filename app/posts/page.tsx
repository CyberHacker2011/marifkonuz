import React from 'react'
import Post from '../(components)/post'
const PostsPage = () => {
  return (
    <>
      <div className='grid grid-cols-3 p-7'> 
          <Post />
      </div>
    </>
  )
}

export default PostsPage