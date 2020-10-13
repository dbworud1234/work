import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <Element>
                <span background-size = "contain">
                    <img src = "images/walk.png" alt="walk" height = "400px" width = "1080px" resize = "both"/>
                </span>
            </Element>
        </Container>
    )
}

export default Header;

const Container = styled.div`
width: 100%;
height: 400px;
`
const Element = styled.div`
margin: 0 auto;
width: 1080px;
height: 400px;
display: flex;
flex-flow: row wrap;
`