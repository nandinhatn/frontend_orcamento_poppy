import styled from "styled-components";


export const FormInsert = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

`;

export const Input = styled.input`
border: 0;
border-bottom: 1px solid gray;
margin-top: 10px;
outline: 0;
&&:focus{
    background-color: #CCCCCC;
}
`;

export const ContainerTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;


`;

export const ContainerButton = styled.div`
margin-top: 20px;
display: flex;
gap: 20px;
`;

export const Container = styled.div`
margin: 20px;
border: 1px solid #CCCCCC;
padding: 20px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: #555555;
`;
