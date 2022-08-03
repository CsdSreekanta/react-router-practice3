import React, { useEffect, useState } from 'react';
import {useParams }from 'react-router-dom'

const PostDetail = () => {
    const {postId} =useParams()
   
const [post, setPost] = useState({})
 
useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => setPost(data))
},[postId])

    return (
       <div className='flex justify-center'>
         <div className="border-4 border-green-700 p-4 my-8 shadow-lg w-1/3">
            <h1 className='font-bold text-pink-400'> This is for post detail: {postId}</h1>
            <h1 className='font-bold text-blue-400'>Title: {post.title}</h1>
            <h1 className='font-bold text-purple-400'>Body: {post.body}</h1>
        </div>
       </div>
    );
};

export default PostDetail;