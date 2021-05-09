import React from 'react';
import styled from 'styled-components'
import StarRateIcon from '@material-ui/icons/StarRate';

const MovieDetials = ({ movie } ) => {
 

    return (
        <Container>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            
        </Container>
    )
}

export default MovieDetials

const Container = styled.div`
    flex: .75;
    padding: 10px;
`