import styled from "styled-components";


export const Container= styled.div`
display: flex;
align-items: center;
justify-content: space-between;

border-bottom: 2px solid #0984E3;
margin-right: 20px;
width: 100%;

padding-top: 10px;
font-size: 14px;
color: #555555;
font-weight: 400;
font-family: Verdana, Geneva, Tahoma, sans-serif;

`;

export const ContainerLogo = styled.div`
padding:5px;`;

export const ImageLogo = styled.img`
width: 60px;

`;

export const Menu = styled.div`
display: flex;


justify-content: space-around;
`;

export const Ul = styled.ul`
display: flex;
gap: 20px;
margin-right:20px;
list-style: none;

`;



export const Li = styled.li`
display: flex;
align-items: center;
gap: 5px;

&:hover{
   
    cursor: pointer;
    text-decoration: underline;
}`;
