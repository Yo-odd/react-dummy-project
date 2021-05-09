import React from 'react';
import "@lottiefiles/lottie-player";
import styled from 'styled-components';

const Wrapper = styled.div`
width: 320px;
height: 320px;
background: white;
align-self:center;
/* justify-content:center; */
/* box-shadow: 0 2px 8px rgba(0,0,0,0.26); */
border-radius: 10px;
margin-bottom:10px;
padding: 10px;
`

const Lottie = ({ source }) => {
    return (
            <Wrapper>
                <lottie-player
                    autoplay
                    // controls
                    loop
                    mode="normal"
                    src={source ? source.json : "https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"}
                    className="lottie"
                // style="width: 320px"
                />
            </Wrapper>
    );
};
export default Lottie;