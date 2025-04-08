import Atag from "../../atom/Atag";

export const educations = [
    {
        name: "연성대학교",
        date: "2012.03. ~ 2014.07.",
        content: "관광중국어과"
    }, 
    {
        name: "웹개발 과정(사설 교육)",
        date: "2024.10. ~ 2025. 03.",
        content : (
            <div>
                <p>평일 19시 - 22시 (3시간)</p>
                <p>웹 표준(HTML/CSS/JavaScript), DBMS(Mysql), Java 교육과정</p>
                <p>Java 기반 객체지향적 프로그래밍과 DB를 연동하는 JDBC 기술을 이용하여 
                    <Atag link={"https://github.com/YUJIMYUNG/miniProject"} 
                        text={"프로젝트 및 회의 상황 공유하는 게시판 공유 서비스"} />  미니 프로젝트를 진행하였습니다.</p>
            </div>
        ),
        subjects: "코리아IT아카데미 인천점"
    },
    {
        name: "React 과정(사설 교육)",
        date: "2024.10. ~ 2025. 03.",
        content : (
            <div>
                <p>주말 9시 - 13시 (4시간)</p>
                <p>웹 표준(HTML/CSS/JavaScript) 활용, React, TypeScript 교육과정</p>
            </div>
        ),
        subjects: "코리아IT아카데미 인천점"
    }
]