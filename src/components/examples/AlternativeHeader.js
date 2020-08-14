import React from 'react'
import styled from 'styled-components'

function StyledHeader({ title, className }) {
    return (
        <section className={className}>
            <h1>Hello from styled header</h1>
            <h2 className='random'>another heading</h2>
            <p>{title}</p>
        </section>
    )
}

const StyledWrapper = styled(StyledHeader)`
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
export default StyledWrapper