import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Container = styled.div`
    height: calc(100vh - 16px);
    background-color: ${defaultTheme.colors.offWhite};
    display: flex;
    flex-direction: column;
    width: 280px;
    margin: 8px;
    left: 0;
    border-radius: 4px;
    padding: 8px;
    align-items: center;
    gap: 8px;
`;

export const AvatarWrapper = styled.div`
    width: 100%;
    height: fit-content;
    padding: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const SidebarWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 8px;
    :hover {
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    font-size: 28px;
    font-family: 'Jersey';
    color: black;
    width: 100%;
    text-align: center;
    margin-top: 8px;
`;

export const SubTitle = styled.h2`
    font-size: 16px;
    font-family: 'Poppins Regular';
    color: black;
    width: 100%;
    text-align: center;
`;
