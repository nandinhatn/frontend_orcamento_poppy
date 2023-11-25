import styled from "styled-components";



export const Container = styled.div`
display: grid;
grid-template-columns:   1fr  5fr 4fr 1fr auto auto;

margin-top: 20px;

justify-content: space-around;
border: 1px solid #CCCCCC;
padding: 20px;
margin:20px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 14px;
color: #555555;
`

export const Lines = styled.div`

border-bottom: 1px solid #CCCCCC;
padding: 10px;

`;

export const Titles = styled.div`
display: flex;
justify-content: start;
align-items: center;
margin-top: 20px;
font-weight: 600;
`;
export const ContainerPlus = styled.div`
display:flex;
justify-content: end;
`;
export const ContainerTitles  = styled.div`
margin: 20px;
border: 1px solid #CCCCCC;
padding: 20px;
color: #555555;

font-family: Verdana, Geneva, Tahoma, sans-serif;
`;


