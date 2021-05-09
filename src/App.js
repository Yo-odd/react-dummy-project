import React from 'react';
import AddUser from './components/Users/AddUsers';
import Lottie from './components/UI/Lottie'
import styled from 'styled-components'

const Wrapper =styled.div`
display: flex;
flex-direction:column;
/* width:auto; */
/* flex-wrap:wrap; */
align-content:center;
justify-items: center;
`

const source = {
  json:`${process.env.PUBLIC_URL}/Lottie.json`
}

function App() {
  return (
    <Wrapper>
      <Lottie source={source}></Lottie>
      <AddUser></AddUser>
    </Wrapper>
  );
}

export default App;
