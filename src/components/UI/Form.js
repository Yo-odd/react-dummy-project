import React from 'react';
import styled from 'styled-components'
const Wrapper = styled.div`
  
  /* margin: 2rem auto; */
  /* padding: 1rem; */

  display: flex;
  flex-direction:column;
  /* justify-content: center; */
  flex-wrap:wrap;

  /* width: 90%; */
  /* max-width: 40rem; */

& label
  {display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;}


& input
  {font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;}

& input:focus
  {outline: none;
  border-color: #4f005f;}
  
& label.warm 
  {color: #4f005f;}
`

const Form = (props) => {
  return (
    <Wrapper>
      <div>
        {props.children}
      </div>
    </Wrapper>
  );
};
export default Form;