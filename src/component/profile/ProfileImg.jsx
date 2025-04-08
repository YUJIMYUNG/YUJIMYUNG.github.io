import React from 'react';
import Img from '../../atom/Img';
import profileIMg from './profile.png'

const ProfileImg = () => {
    return (
        <div className="max-w-xs mx-auto">
            <Img 
                src={profileIMg}
            />
            
        </div>
    );
};

export default ProfileImg;