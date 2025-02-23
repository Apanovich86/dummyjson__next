import React from 'react';
import { getAllUsers } from '../services/api.service';

const UsersComponent = async () => {

   const users = await getAllUsers();
   console.log(users);

    return (
        <div>
            {users.users.map((user) => <div key={user.id}>{user.id} {user.username}</div>)}
        </div>
    );
};

export default UsersComponent;