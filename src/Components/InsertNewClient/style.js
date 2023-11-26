import styled from "styled-components";


export const FormInsert = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom:20px;

`;

export const Input = styled.input`
border: 0;
border-bottom: 1px solid gray;
margin-top: 10px;
padding: 5px;
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

font-family: Verdana, Geneva, Tahoma, sans-serif;

`;

