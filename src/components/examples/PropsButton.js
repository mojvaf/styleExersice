import styled from 'styled-components'

const PropsButton = styled.button`
 background: ${(props) => props.color ? props.color : 'green'};
 color: wheat;
 padding: 1rem;
 font-size: 2rem
  
`

export default PropsButton