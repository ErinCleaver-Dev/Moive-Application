import React from 'react';
import styled from 'styled-components'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const MovieList = ({ movies, clickedMovie, editClicked }) => {

    const movieClicked = movie => evt => {
        clickedMovie(movie);
    }

    const editMovie = (movie) => {
        editClicked(movie);
    }

    return (
        <Container>
            Movie List
            {console.log(movies)}
            {movies.map((movie) => (
                <Movie>
                <h2 key={movie.id} onClick={movieClicked(movie)}>{movie.title}</h2>
                <EditButton onClick={() => editMovie(movie)}/>
                <DeleteButton />
                </Movie>
            ))}
            
        </Container>
    )
}

export default MovieList

const Container = styled.div`
    flex: .30;
    width: 40vh;
    min-height: 100vh;
    padding: 10px;

`

const Movie = styled.div`
    display: flex;
    align-content: center;
    svg {
        font-size: 30px;
        color: darkblue;
        cursor: pointer;
        position: relative;
        top: 20px;
        padding: 5px;
    }
`
const EditButton = styled(EditIcon)`
`

const DeleteButton = styled(DeleteIcon)`
`