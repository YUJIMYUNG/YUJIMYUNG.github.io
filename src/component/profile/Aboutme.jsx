//개인정보
import React from 'react';
import Title from '../../atom/Title';
import ProfileImg from './ProfileImg';
import { Introduction } from './Introduction';
import Contact from './Contact';
import Subtitle from '../../atom/Subtitle';

const Aboutme = () => {
    return (
        <div className='m-10'>
            {/* aboutme 제목 */}
            <Title title={'유지명입니다.'}/>
            
            {/* aboutme 본문  */}
            <div className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* 프로필이미지 */}
                    <div className="lg:col-span-1">
                        <ProfileImg />
                    </div>

                    {/* 자기소개 및 연락처 */}
                    <div className="lg:col-span-2">
                        <div className='pb-2'>
                            <Subtitle title={"INTRODUCTION"} />
                            <div className='mt-8'>
                                {Introduction.map((intro, idx)=>(
                                    <p key={idx}>{intro}</p>
                                ))}
                            </div>
                        </div>

                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;