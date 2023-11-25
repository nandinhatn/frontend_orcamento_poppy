import styled from "styled-components";


export const FormInsert = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin: 20px;
padding: 20px;
font-size: 14px;
border: 1px solid #CCCCCC;

`;

export const Input = styled.input`
border: 0;
border-bottom: 1px solid gray;
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
font-family: 'Roboto', sans-serif;

`;

export const ContainerCheck = styled.div`
display: flex;
align-items: center;
height: 20px;
padding: 20px 0 20px 0;

`;

