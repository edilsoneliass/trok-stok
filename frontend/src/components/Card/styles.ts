import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: 100%;
    background-color: white;
    box-shadow: 3px 3px 5px #313131;
    :hover {
        cursor: pointer;
        background-color: #eaeaea;
    }
    padding: 8px 12px;
    height: fit-content;
    border-radius: 4px;
`;

export const MainText = styled.h5`
    color: black;
    font-family: 'Poppins Regular';
    font-size: 20px;
    text-align: left;
`;

export const Detail = styled.p`
    color: black;
    font-family: 'Poppins Regular';
    font-size: 12px;
    height: fit-content;
`;
