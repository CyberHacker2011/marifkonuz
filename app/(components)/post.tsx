import React from 'react'
import Link from 'next/link'
import PostsList from '@/api/posts'
type PostProps = {
    id: number,
}
type PostListType = {
    id: number;
    title: string;
    author: string;
    body: string;
  };
const defaultPost: PostListType = {
  id: 0,
  title: "Default Title",
  author: "Anonymous",
  body: "This is a default post body.",
};
const getSnippet = (text: string, limit: number): string => {
  if (text.length <= limit) return text; // If text is shorter than limit, return it as is.

  const snippet = text.slice(0, limit); // Take the first `limit` characters.
  const lastSpaceIndex = snippet.lastIndexOf(" "); // Find the last space in the snippet.

  return lastSpaceIndex > -1 ? snippet.slice(0, lastSpaceIndex) : snippet; // Trim to the last word if possible.
};
const Post: React.FC<PostProps> = ({
    id = 1
}: PostProps) => {
  
  const post = PostsList.find((p: PostListType) => p.id === Number(id)) || defaultPost;
  

  return (
    <>
      
        <Link href={`/posts/${post.id}`} >
            <div className='flex shadow-lg px-4 py-5 flex-col gap-2 '>
                <div className='flex flex-col items-center justify-center'>  
                    <h1 className=' text-xl md:text-2xl font-bold '>{post.title}</h1>
                    <p className='font-thin'>{post.author}</p>
                </div>
                <p>
                    {getSnippet(post.body,250)}...
                </p>
            </div>
        </Link>
        
    </>
  )
}

export default Post