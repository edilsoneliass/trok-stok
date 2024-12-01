import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Title = styled.h1`
    font-size: 48px;
    font-family: 'Jersey';
    color: black;
    width: 100%;
    text-align: left;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    margin-top: 32px;
`;

export const Container = styled.div`
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 90vh;
    width: 90vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${defaultTheme.colors.offWhite};
    border-radius: 4px;
    z-index: 2;
    box-shadow: 0px 0px 3px black;
`;

export const SafeArea = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 2% 2%;
    flex-grow: 1;
    overflow-y: auto;
`;

export const ItemDetails = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const ImageDiv = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

export const InputsDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px;
    padding: 32px 40px;
    align-items: center;
`;

export const AddImage = styled.div`
    width: 60%;
    aspect-ratio: 1;
    border: 1px solid black;
    margin-top: 12px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        cursor: pointer;
    }
`;

export const AddImageText = styled.p`
    font-size: 16px;
    font-family: 'Poppins Regular';
`;

export const InputImageDiv = styled.div`
    width: 60%;
`;
