import React from 'react';

const Atag = ({link, text}) => {
    return (
        <div>
            <a href={link} className='underline decoration-1'>{text}</a>
        </div>
    );
};

export default Atag;