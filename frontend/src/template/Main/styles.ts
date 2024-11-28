import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Title = styled.h1`
    font-size: 48px;
    font-family: 'Jersey';
    color: white;
    width: 100%;
    text-align: left;
`;

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${defaultTheme.colors.secondary.main};
`;

export const TitleDiv = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
`;

export const LogoImg = styled.img`
    width: 100%;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 95%;
    background-color: orange;
    border-radius: 12px;
    background-image: url('/images/ToolsBg.png');
`;

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 5% 10%;
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex: 1;
`;

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 24px;
`;
