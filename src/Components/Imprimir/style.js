import styled from "styled-components";

export const Container = styled.div`
border: 1px solid black;
margin-top: 40px;
margin-bottom:40px;
width: 800px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight: 300;
font-size: 14px;


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
font-size: 25px;
display: flex;

padding: 20px 40px 20px 40px;
align-items: center;
justify-content: center;
border: 1px solid black;
margin-top: 10px;
`;

export const ImageLogo = styled.img`
height: 80px;
`;

export const ContainerContent = styled.div`
border: 1px solid black;
margin: 20px;
`;
export const ContainerOrcamento = styled.div`
display: grid;
grid-template-columns: 2fr 8fr;
padding: 20px;
margin-bottom: 40px;

`;
export const ContainerValues = styled.div`
display: flex;
align-items: center;

border-bottom: 1px solid black;
`;
export const Title = styled.div`
display: flex;
justify-content: center;
font-weight: bold;
background-color: gray;
margin: 10px;
padding: 10px 10px 10px 10px;
`;

export const ContainerSignatures = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`;
export const ContainerSignaturesName = styled.div`
border-top: 1px solid black;
margin-bottom: 40px;
`;


export const ContainerButtons = styled.div`
display: flex;
justify-content: center;
width: 800px;
gap: 20px;
`;

