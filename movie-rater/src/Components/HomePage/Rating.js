import React, { useState } from 'react';
import styled from 'styled-components';
import StarRateIcon from '@material-ui/icons/StarRate';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const Rating = ({movie, getDatails}) => {
    const [highlighted, setHighlighted ] = useState(-1);
    
    const hightlitedRate = (highlight) => evt => {
        setHighlighted(highlight);
    }

    
    const rateClicked = (rate) => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': 'Token 812e9bd5fb611a6c33957b623010b9edb6eacc4c'
            },  
            body: JSON.stringify({
                stars: rate + 1
            })
        }).then(resp => resp.json())
        .then(resp => getDatails())
        .catch(error =>console.log(error))
    }


    return (
        <Container>
            <Title> Rate it </Title>            
            <StarContainer>
                {   [...Array(5)].map((e, i) => (
                    <Star 
                    key={e} 
                    onMouseEnter={hightlitedRate(i)} 
                    onMouseLeave={hightlitedRate(-1)}
                    onClick={rateClicked(i)}>
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
    padding-left: 25px;
    border-top: 2px solid black;
`

const Title = styled.div`
    font-size: 30px;
`
const Star = styled.div`
    cursor: pointer;
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