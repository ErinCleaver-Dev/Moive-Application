import React from 'react';
import styled from 'styled-components'

const MovieList = ({ movies, clickedMovie }) => {

    const movieClicked = movie => evt => {
        clickedMovie(movie)
    }

    return (
        <Container>
            Movie List
            {console.log(movies)}
            {movies.map((movie) => (
                <h2 key={movie.id} onClick={movieClicked(movie)}>{movie.title}</h2>
            ))}
        </Container>
    )
}

export default MovieList

const Container = styled.div`
    flex: .30;
    border-right: 2px solid black;
    min-height: 100vh;
    padding: 10px;

`