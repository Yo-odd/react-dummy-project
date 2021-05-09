import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
background: white;
/* width:vmax; */
box-shadow: 0 2px 8px rgba(0,0,0,0.26);
border-radius: 10px;
`

const Card = (props) => {
    return (
        <Wrapper>
            <div>
                {props.children}
            </div>
        </Wrapper>
    );
};
export default Card;