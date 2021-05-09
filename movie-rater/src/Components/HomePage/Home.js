import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import MovieDetials from './MovieDetials'
import MovieList from './MovieList'

const Home = ({token}) => {

    // Creates a const useState for holding a list of movies 
    const [movies, setMovie] = useState ([]);
    const [selectedMovie, setSelectedMovie] = useState([]);

    // created a react hock for the use effect to 
    // get data from the Django sql database
    useEffect(()=>{
        // use the fetch to get the data from the database
        fetch("http://127.0.0.1:8000/api/movies/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': 'Token 812e9bd5fb611a6c33957b623010b9edb6eacc4c'
            }
        }).then(resp => resp.json())
        .then(resp => setMovie(resp))
        .catch(error =>console.log(error))
    }, [])

    const clickedMovie = movie => {
        setSelectedMovie(movie);
    }

    return (
        <Container>
            <MovieList movies={movies} clickedMovie={clickedMovie}/>
            <MovieDetials movie={selectedMovie}/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    display: flex;
    flex-direction: row;
`