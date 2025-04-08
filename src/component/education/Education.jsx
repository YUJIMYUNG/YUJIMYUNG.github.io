// 학력 및 교육사항 기술
import React from 'react';
import Subtitle from '../../atom/Subtitle';
import { educations } from './data';
import TableRow from '../../atom/TableRow';
import SubText from '../../atom/SubText';
import Text from '../../atom/Text';

const Education = () => {
    return (
        <div className='m-10'>
            <Subtitle title={"EDUCATION"} />
        <div>
            {educations.map((education, idx)=>(
                <TableRow children={        
                    <>
                        <div>
                            <SubText>{education.date}</SubText>
                            <Text>{education.name}</Text>
                            {education.subjects ? (<SubText>{education.subjects}</SubText>) : null}
                        </div>
                        <div className='mt-4 md:mt-0 col-span-4'>{education.content}</div>
                    </>
                }>
                </TableRow>

            ))}
        </div>
    </div>
    );
};

export default Education;