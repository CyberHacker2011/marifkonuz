"use client";

import React from "react";
import { useParams } from "next/navigation";
import PostsList from "@/api/posts";

type PostListType = {
  id: string;
  title: string;
  author: string;
  body: string;
};

const PostPage = () => {
  const { postid } = useParams<{ postid: string }>();

  const post = PostsList.find((p: PostListType) => p.id === postid);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex justify-center items-center px-10 py-5">
      <div className="flex flex-col shadow-lg justify-center items-center py-4 px-5 md:py-10 md:px-20 max-w-lg md:max-w-xl gap-2">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="font-thin">
          <span className="font-bold">Author:</span> {post.author}
        </p>
        <p className="whitespace-pre-line">{post.body}</p>
      </div>
    </div>
  );
};

export default PostPage;
