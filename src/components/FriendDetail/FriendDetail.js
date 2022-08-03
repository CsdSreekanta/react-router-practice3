import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const FriendDetail = () => {
    
const {friendId} = useParams()

const [friend, setFriend] = useState({})
console.log(friend)


useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
    .then(res => res.json())
    .then(data => setFriend(data))
},[friendId])

    return (
        <div className='flex justify-center'>
            <div className='border-4 border-purple-600 shadow-lg p-3 rounded my-6 w-1/3'>
            <h1>This is detail about my trusted Friend: {friendId}</h1>
            <h1>Name: {friend.name}</h1>
            <h1>Phone: {friend.phone}</h1>
            <h1>Website: {friend.website}</h1>
            <h1>Email: {friend.email}</h1>
            <h1>City: {friend.address?.city}</h1>
            
        </div>
        </div>
    );
};

export default FriendDetail;