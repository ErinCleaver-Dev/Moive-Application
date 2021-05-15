import React from 'react';
import styled from 'styled-components'


export const EditForm = ({ movie }) => {

    return (
        <Container>
            {movie.id != null ? ( 
            <Movie>
            <Title>
               Edit {movie.title} 
            </Title>
            <FormContainer>

            </FormContainer>
            </Movie>
            ) : null }
        </Container>
    )
}

export const CreateMovie = () => {
    return (

        <Container>
        <Movie>
        <Title>
        </Title>
        <FormContainer>

        </FormContainer>
        </Movie>
        </Container>
    )
}

const Container = styled.div`
    border-left: 2px solid black;
    height: 100vh;
`

const Title = styled.h2`
    padding: 10px 50vh;
    border-bottom: 3px solid black;
`

const FormContainer = styled.form`

`
const Movie = styled.div`
    display: flex;

`