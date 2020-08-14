import styled from 'styled-components'
import fall from '../components/image/fall.jpg'

const Hero = styled.div`
 min-height:100vh;
 background-image: url(${props => props.img ? props.img : fall});
 background-position: center;
background-size: center;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center
`

export default Hero