import React from 'react';
import { getAllUsers } from '../services/api.service';
import Link from 'next/link';

const UsersComponent = async () => {

   const users = await getAllUsers();
   console.log(users);

    return (
        <div>
            {users.users.map((user) => <div key={user.id}><Link href={{pathname:'/users/'+user.id.toString(), query:{data: JSON.stringify(user)} }}>{user.id} {user.username}</Link></div>)}
        </div>
    );
};

export default UsersComponent;