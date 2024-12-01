import styled from 'styled-components';

export const TextContainer = styled.div<{ color: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 100%;
    color: ${({ color }) => color};
`;

export const Line = styled.div<{ color: string }>`
    display: flex;
    height: 2px;
    flex: 1;
    margin: 0 12px;
    background-color: ${({ color }) => color};
`;

export const Text = styled.h5`
    font-family: 'Poppins Regular';
    font-size: 16px;
`;
