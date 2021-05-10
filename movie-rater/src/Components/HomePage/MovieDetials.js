import React from 'react';
import styled from 'styled-components'
import StarRateIcon from '@material-ui/icons/StarRate';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const MovieDetials = ({ movie } ) => {
    // Created a fuctnion for displaying stars.
    const displayStars = (movieRater) => {
        let contant = [];
        // First it checks to make sure that the number of ratings is not null
        if(movieRater.number_of_ratings != null) {
            // Then it enters a for loop to display the number of stars
            for(let i = 0; i <= 4; i++) {
                // Adds the stars to an array
                contant.push(movieRater.avg_rating > i ? <StarOrange/> : <StarOutlined/>);
            }
            // adds the ratings to an array
            contant.push(" (" + movieRater.number_of_ratings + ")");
        }
        return contant;
    }

    return (
        
        <div>
            { movie.number_of_ratings != null
            ? (
            <Container key={movie.id}>
            <Title>{movie.title}</Title>
            <p>{movie.description}</p>
            <StarContainer>{displayStars(movie)}</StarContainer>
            </Container>
            ) : ""
            } 
        </div>
    )
}

export default MovieDetials

const Container = styled.div`
    flex: .75;
    padding-top: 10px;
    p {
        font-size: 22px;
        padding: 2px;
        margin: 2px;
    }
`
const Title = styled.div`
    width: 100%;
    
    font-size: 50px;
    border-bottom: 2px solid black;
`

const StarContainer = styled.div`
    font-size: 22px;
    display: flex;
    align-items: center;
`

const StarOrange = styled(StarRateIcon)`
    color: orange;
`

const StarOutlined = styled(StarOutlineIcon)`

`