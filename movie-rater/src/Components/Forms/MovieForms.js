import React from 'react';
import styled from 'styled-components'
import { Container, Title } from '../Formats/Formats'
import Form from './Form'

export const EditForm = ({ movie }) => {

    return (
        <Container>
            {movie.id != null ? ( 
            <Movie>
                <Title>
                Edit {movie.title} 
                </Title>
                <Form/>
                <Button/>
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
                    Add New Movie
                </Title>
                <Form/>
                <Button/>
            </Movie>
        </Container>
    )
}


const Movie = styled.form`
    display: flex;
`

const Button = styled.button``