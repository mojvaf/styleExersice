import styled from "styled-components";


const color = 'white';
const padding = 'padding: 1rem';
const margin = 'margin:1rem';
const border = (width = '3px') => {
  return `border: solid ${width} blue`
}

export const Button = styled.button`
  ${padding};
  ${margin}
  color: ${color};
  background: palevioletred;
  text-transform: uppercase;
  ${border()}
`;
export const SecondButton = styled.button`
  color: wheat;
  background: var(--primaryColor);
  text-transform: uppercase;
  ${padding};
  ${margin};
  ${border('15px')}
`;