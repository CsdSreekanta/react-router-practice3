import React from 'react';
import {useNavigate, Link} from 'react-router-dom'
const Friend = ({friend}) => {
    const {name, username, id} = friend 

    const navigate = useNavigate()

    const handleButton=()=>{
        const path=`/friend/${friend.id}`
        navigate(path)
    }
    return (
        <div>
            <h1>{name}</h1>
            <Link className='mr-3 underline' to={`/friend/${friend.id}`}>{friend.username}</Link>
            <button onClick={handleButton} className='button bg-blue-600 p-2 m-2 rounded'>{username} id: {id}</button>
        </div>
    );
};

export default Friend;