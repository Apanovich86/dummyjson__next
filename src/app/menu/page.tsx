import Link from 'next/link';
import React from 'react';

const MenuPage = () => {
    return (
        <div>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/users'}>Users</Link></li>
                <li><Link href={'/recepi'}>Recepi</Link></li>
            </ul>
        </div>
    );
};

export default MenuPage;