import React from 'react';
import styled from 'styled-components'
import StarRateIcon from '@material-ui/icons/StarRate';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import Rating from './Rating';
import { Container, Title } from '../Formats/Formats'

const MovieDetials = ({ movie, updateMovie } ) => {
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

    const getDatails = () => {
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': 'Token 812e9bd5fb611a6c33957b623010b9edb6eacc4c'
            }
        }).then(resp => resp.json())
        .then(resp => updateMovie(resp))
        .catch(error =>console.log(error))
    }

    return (
        <div>
        {movie.id != null ? 
        (<Container key={movie.id}>
            <Title>{movie.title}</Title>
            <Details>{movie.description}</Details>
            <StarContainer>{displayStars(movie)}</StarContainer>
            <Rating movie={movie} getDatails={getDatails}/>
        </Container>) : ""
        }
        </div>

    )
}

export default MovieDetials

const StarContainer = styled.div`
    padding-left: 25px;
    font-size: 22px;
    display: flex;
    align-items: center;
    padding-bottom: 5px;
`

const StarOrange = styled(StarRateIcon)`
    color: orange;
`

const StarOutlined = styled(StarOutlineIcon)`

`

const Details = styled.div`
    padding: 10px 25px;
`