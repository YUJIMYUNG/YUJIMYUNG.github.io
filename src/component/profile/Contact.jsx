// 연락처 기술
import React from 'react';
import { contacts } from './contacts';
import Atag from '../../atom/Atag';
import Subtitle from '../../atom/Subtitle';

const Contact = () => {
    return (
        <div className="border-t-2 pt-4">
            <Subtitle title={"CONTACT"} />
            <div className="grid grid-cols-2 gap-4 mt-2">
                {contacts.map((con, idx)=>(
                    <p key={idx} className='breack-all'>
                        <span className='font-bold text-default mr-2'>{con.name}</span>
                        <Atag link={con.link} text={con.text? con.text : con.link} />
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Contact;