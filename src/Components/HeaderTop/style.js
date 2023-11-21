import styled from "styled-components";


export const Container= styled.div`
display: flex;
align-items: center;
justify-content: space-between;

border-bottom: 1px solid gray;
margin-right: 20px;
width: 100%;

padding-top: 20px;

font-family: 'Roboto', sans-serif;

`;

export const ContainerLogo = styled.div`
padding:10px;`;

export const ImageLogo = styled.img`
width: 80px;

`;

export const Menu = styled.div`
display: flex;
align-items: center;

justify-content: space-around;
`;

export const Ul = styled.ul`
display: flex;
gap: 20px;
margin-right:20px;
list-style: none;

`;



export const Li = styled.li`

&:hover{
    color: #54C4C8;
    cursor: pointer;
}`;
