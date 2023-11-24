import styled from "styled-components";

export const Container = styled.div`
border: 1px solid black;
margin-top: 40px;


`;

export const ContainerHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const ContainerLogo = styled.div`
display: flex;
align-items: center;
padding: 20px;
`;

export const ContainerNumber = styled.div`
display: flex;
align-items: center;
flex-direction: column;


font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
padding: 20px;


`;

export const NumberOrc = styled.div`
font-size: 30px;
display: flex;
padding: 20px;
align-items: center;
border: 1px solid black;
`;

export const ImageLogo = styled.img`
height: 80px;
`;

export const ContainerContent = styled.div`
border-top: 1px solid black;
`;
export const ContainerOrcamento = styled.div`
display: grid;
grid-template-columns: 2fr 2fr;
padding: 20px;

`;
export const ContainerValues = styled.div`
border-bottom: 1px solid black;
`;