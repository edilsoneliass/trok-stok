import styled from 'styled-components';

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 100%;
`;

export const Line = styled.div`
    display: flex;
    height: 2px;
    flex: 1;
    margin: 0 12px;
    background-color: white;
`;

export const Text = styled.h5`
    color: white;
    font-family: 'Poppins Regular';
    font-size: 16px;
`;
