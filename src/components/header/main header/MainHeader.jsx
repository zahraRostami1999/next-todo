import React from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';

function MainHeader() {
    return (
        <div className='flex items-center '>
            <div className='w-1/4 '>
                <Logo />
            </div>
            <div className='w-1/2 '>
                <Navigation />
            </div>
        </div>
    )
}

export default MainHeader
