import React from 'react';
import styled from 'styled-components'

const MovieList = ({ movies }) => {
    return (
        <Container>
            Movie List

            {movies.map((movie) => (
                <h2>movie.title</h2>
            ))}
        </Container>
    )
}

export default MovieList

const Container = styled.div`
    flex: .15;
    border-right: 2px solid black;
    min-height: 100vh;
    padding: 10px;

`