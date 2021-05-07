import './App.css';
import React from 'react';
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Home from './Components/HomePage/Home'
import Header from './Components/Header/Header'

function App() {

  // made a movies use state for importing the movies 

  return (
    <Container>
      <Helmet>
        <title>Movie Rater</title>
      </Helmet>
      <Header/>
      <Home/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`