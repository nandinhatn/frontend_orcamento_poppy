import styled from "styled-components";



export const Container = styled.div`
display: grid;
grid-template-columns:   1fr  5fr 4fr 1fr auto auto;
width: 100%;
margin-top: 20px;

justify-content: center;
`

export const Lines = styled.div`
border-bottom: 1px solid black;
`;

export const Titles = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`;
export const ContainerPlus = styled.div`
display:flex;
justify-content: end;
`;

