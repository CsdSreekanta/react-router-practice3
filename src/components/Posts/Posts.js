import React, { useEffect, useState } from 'react';
import {Link, Outlet} from 'react-router-dom'

const Posts = () => {
    const [posts, setPosts] = useState([])
    console.log(posts)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h1>This section for post</h1>
            {
                posts.map(post => <Link className='underline mr-2' to={`/posts/${post.id}`}>{post.id}  </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;