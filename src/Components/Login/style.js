import styled from "styled-components";

import Foto from '../../Assets/startup-desktop.jpg'

export const Container = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: auto;
height: 100vh;
background-color: gray;
background-image: url(${Foto});
background-size: cover;
font-family: Verdana, Geneva, Tahoma, sans-serif;

gap: 20px;


`;
export const ContainerLogin = styled.div`
width: 400px;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
border-radius: 5px;
border:  1px solid #E3E3E3;
background-color: white;
`;

export const Input = styled.input`
background-color: #E8F0FE;
border: 1px solid #CCCCCC;
color: #555555;
padding: 5px;
outline: 0;
width: 100%;

&&:focus{
    border: 1px solid #66AFE9;
    border-left:0px;
    box-shadow: 0 0 5pt 2pt #66AFE9;
}



`;
export const ContainerInput = styled.div`
display: flex;
`;

export const ContainerIcon = styled.div`
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
color: #555555;
font-size: 14px;
background-color: #EEEEEE;
border: 1px solid #CCCCCC;

`;

export const ContainerLogo = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const ImageLogo = styled.img`
width: 50px;
`;
export const Divisor = styled.div`
border-right: 1px solid #CCCC;
padding: 20px;



margin-top: 20px;
margin-bottom: 20px;
`;

export const TitleLogin = styled.div`
padding: 10px;
color: #555555;
font-family: Verdana;
font-weight: bold;
padding: 20px;
`;

export const ContainerMsg = styled.div`
font-weight: 600;
color: #555555;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;
`;