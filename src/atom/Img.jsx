import React from 'react';

const Img = ({src, alt}) => {
    return (
        <img
            src={src}
            alt={alt} 
            className="w-full h-auto aspect-square rounded-md object-cover shadow-md" 
            referrerPolicy="no-referrer"
        />
    );
};

export default Img;