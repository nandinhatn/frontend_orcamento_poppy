import styled from "styled-components";

export const Container = styled.div`
border: 1px solid #555555;
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
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 14px;
color: black;
width: 200px;
border: 1px solid black;
border-top: 0;
border-right:0;
border-left: 0;
`;

export const ContainerNumber = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 200px;

border-bottom: 1px solid black;
border-top: 0;



font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
padding: 20px;
color: #555555;


`;

export const NumberOrc = styled.div`
font-size: 25px;
display: flex;

padding: 20px 40px 20px 40px;
align-items: center;
justify-content: center;

margin-top: 10px;
`;

export const ContainerAddress = styled.div`
width: 400px;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 400;
color: #555555;
font-family: Verdana, Geneva, Tahoma, sans-serif;
border: 1px solid black;
border-top: 0;
`;

export const ImageLogo = styled.img`
height: 80px;
`;

export const ContainerContent = styled.div`
border-bottom: 1px solid #555555;
margin: 20px;
padding: 10px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 14px;

`;
export const ContainerOrcamento = styled.div`
display: grid;
grid-template-columns: 2fr 8fr;
padding: 20px;
margin-bottom: 40px;
border: 1px solid #555555;

`;
export const ContainerValues = styled.div`
display: flex;
align-items: center;

border-bottom: 1px solid #555555;
`;
export const Title = styled.div`
display: flex;
justify-content: center;
font-weight: bold;
background-color: gray;
margin-bottom: 40px;

padding: 10px 10px 10px 10px;
`;

export const ContainerSignatures = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`;
export const ContainerSignaturesName = styled.div`
border-top: 1px solid #555555;
margin-bottom: 40px;
`;


export const ContainerButtons = styled.div`
display: flex;
justify-content: center;
width: 800px;
gap: 20px;
`;

