import React from 'react'
import styled from 'styled-components'

function StyledHeader({ title }) {
    return (
        <StyledWrapper>
            <h1>Hello from styled header</h1>
            <h2 className='random'>another heading</h2>
            <p>{title}</p>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.section`
 background: tomato;
 transition: all 2s ease-in-out;
 h1{
     color: blue;
 }
 .random {
     color : purple;
 }

&:hover{
    background: lightcoral
}
`
export default StyledHeader