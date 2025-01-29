import React from 'react'
import Post from '../(components)/post'
import PostList from "@/api/posts"
const PostsPage = () => {
  
  const postData = PostList;
  return (
    <>
      <div className="flex justify-center p-5 md:p-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl">
      {postData.map((post)=>(
        <Post 
        id={post.id}
        key={post.id}
        />
      ))
          
      }
      </div>
      </div>
    </>
  )
}

export default PostsPage