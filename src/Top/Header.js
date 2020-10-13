import React from 'react';
import styled from 'styled-components';
const image = `https://dbworud1234.github.io/work/images/walk.png`;

function Header() {
    return (
        <Container>
            <Element>
                <span background-size = "contain">
                    <img src={image} alt="walk" height = "400px" width = "1080px" resize = "both"/>
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