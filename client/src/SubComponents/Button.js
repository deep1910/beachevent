import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Section = styled.div`
margin-top: 1rem;
width: fit-content;
border: 1px solid white;
padding: 0.5rem 1rem;
border-radius: 6px;
transition: all 0.2s ease;
z-index: 10;

&:hover{
    transform: scale(1.1);
}

&:active{
    transform: scale(0.9);
}
`

const Button = ({text, link}) => {
  return (
    <Section>
    <Link to={link}>
    {text}
    </Link>
    </Section>
  )
}

export default Button