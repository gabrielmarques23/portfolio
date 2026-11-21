import styled from "styled-components"

export const Container = styled.button`
background-color: ${({ theme }) => theme.COLORS.ACCENT};
color: ${({ theme }) => theme.COLORS.TEXT_ON_ACCENT};

display: grid;
align-content: center;

height: 1.5rem;
padding:1rem;
border: none;
border-radius: 1rem;

font-size: 1rem;
font-weight: normal;

 &:hover{
    background-color: ${({ theme }) => theme.COLORS.ACCENT_HOVER};
 }
`;
