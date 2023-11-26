import styled from "styled-components";


export const FormInsert = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

`;

export const Input = styled.input`
border: 0;
border-bottom: 1px solid gray;

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
display: flex;
gap: 20px;
`;

export const Container= styled.div`
margin: 20px;
padding: 20px;
border: 1px solid #CCCCCC;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 14px;
color: #555555;
`;
export const ContainerCheck = styled.div`
display: flex;
gap:20px;
align-items: center;
`;

