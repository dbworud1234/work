import React from 'react';
import styled from 'styled-components';

class About extends React.Component {
    render() {
        return (
            <Hello>
                <h2>산책하는 사람들을 위한 서비스</h2>
                산책한 날짜와 시간등을 메모하고<br/>
                애완견, 친구, 사랑하는 사람과 같이 걷고 싶은 장소를
                메모하여 기록해보세요 !<br/><br/>
                React WebSite 2020 Created by Yu JaeKyung
            </Hello>
        );
    }
}

export default About;

const Hello = styled.div`
margin: 0 auto;
width: 50%;
// border-bottom: 1px solid #d1d8e4;
`
// border-bottom: 1px solid #d1d8e4;