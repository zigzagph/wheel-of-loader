import React from 'react';
//import './App.css';
import styled from 'styled-components';
import Preloader from './Preloader';
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

function App() {
    return (
        <Wrapper>
            <Preloader />
        </Wrapper>
    );
}

export default App;
