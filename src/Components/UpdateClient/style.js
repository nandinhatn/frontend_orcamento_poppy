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
    background-color: #B4BBD2;
}
`;

export const ContainerTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
font-family: 'Roboto', sans-serif;

`;

