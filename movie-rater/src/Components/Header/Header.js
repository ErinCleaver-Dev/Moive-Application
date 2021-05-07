import React from 'react';
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <Title>
            Movie Rater
            </Title>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 8vw;
    display: flex;    
    justify-content: center;
    align-items: center;
    background-color: #4d5a5c;
    color: #5283a3;
    border-bottom: 5px solid #5283a3;
    text-shadow: 5px 5px 2px rgba(0, 0, 0, 0.4);
`

const Title = styled.h2`
    font-size: 100px;
`