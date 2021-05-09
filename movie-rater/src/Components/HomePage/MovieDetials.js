import React from 'react';
import styled from 'styled-components'
import StarRateIcon from '@material-ui/icons/StarRate';

const MovieDetials = ({ movie } ) => {
    const displayStars = (movieRater) => {
        let contant = [];
        for(let i = 0; i <= 4; i++) {
            contant.push(<Star className={movieRater.avg_rating > i ? 'orange': 'white'}/>)
        }
        return contant;
    }

    
    return (
        
        <div>
            { movie ? (
            <Container>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>{displayStars(movie)}({movie.number_of_ratings})</p>
            
            </Container>
            ) : null
            } 
        </div>
    )
}

export default MovieDetials

const Container = styled.div`
    flex: .75;
    padding: 10px;
`

const Star = styled(StarRateIcon)`

    color: orange;


`