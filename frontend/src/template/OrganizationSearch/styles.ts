import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Title = styled.h1`
    font-size: 48px;
    font-family: 'Jersey';
    color: white;
    width: 100%;
    text-align: left;
`;

export const Header = styled.div`
    height: 100px;
    width: 100%;
    background-color: red;
`;

export const InputsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    height: fit-content;
`;

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${defaultTheme.colors.secondary.main};
    flex: 1;
`;

export const BgContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: row;
    background-color: ${defaultTheme.colors.secondary.main};
    overflow: auto;
`;

export const SafeArea = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 2%;
    gap: 12px;
    flex-grow: 1;
`;

export const ContentDivs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-top: 32px;
    height: 100%;
    overflow: auto;
`;

export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    height: fit-content;
`;

export const CardsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
`;

export const ButtonContainer = styled.div`
    width: 30%;
    height: fit-content;
    align-self: center;
`;
