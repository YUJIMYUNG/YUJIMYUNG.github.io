// 경력사항 기술

import React from 'react';
import Subtitle from '../../atom/Subtitle';
import { experience } from './data';
import SubText from '../../atom/SubText';
import Text from '../../atom/Text';
import TableRow from '../../atom/TableRow';

const Experience = () => {
    return (
        <div className='m-10'>
            <Subtitle title={"EXPERIENCE"} />
        <div>
            {experience.map((experience, idx)=>(
                <TableRow children={        
                    <>
                        <div>
                            <SubText>{experience.date}</SubText>
                            <Text>{experience.name}</Text>
                            {experience.subjects ? (<SubText>{experience.subjects}</SubText>) : null}
                        </div>
                        <div className='mt-4 md:mt-0 col-span-4'>{experience.content}</div>
                    </>
                }>
                </TableRow>

            ))}
        </div>
    </div>
    );
};

export default Experience;