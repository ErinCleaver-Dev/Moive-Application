import React, { useState } from 'react';
import styled from 'styled-components';
import StarRateIcon from '@material-ui/icons/StarRate';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const Rating = ({movie}) => {
    const [highlighted, setHighlighted ] = useState(-1);
    
    const hightlitedRate = (highlight) => evt => {
        setHighlighted(highlight);
    }

    return (
        <Container>
            <Title> Rate it </Title>            
            <StarContainer>
                {   [...Array(5)].map((e, i) => (
                    <Star key={e} onMouseEnter={hightlitedRate(i)} onMouseLeave={hightlitedRate(-1)}>
                    {highlighted >= i ? <StarOrange/> : <StarOutlined/>}
                    </Star>
                ))
                }
            </StarContainer>
        </Container>


    )    
}

export default Rating

const Container = styled.div`
    padding-top: 25px;
    border-top: 2px solid black;
`

const Title = styled.div`
    font-size: 30px;
`
const Star = styled.div`

`

const StarContainer = styled.div`
    font-size: 22px;
    display: flex;
    align-items: center;
    padding-bottom: 5px;
`

const StarOrange = styled(StarRateIcon)`
    color: orange;
    font-size: 22px;
`

const StarOutlined = styled(StarOutlineIcon)`
    font-size: 22px;
`