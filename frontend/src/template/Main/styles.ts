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
`;

export const SafeArea = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 2%;
    gap: 32px;
    flex-grow: 1;
    overflow-y: auto;
`;

export const ContentDivs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-top: 32px;
    height: 100%;
    overflow: auto;
`;

export const ItemsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    overflow-y: auto;
    height: 100%;
    ::-webkit-scrollbar {
        width: 12px; /* Width of the scrollbar */
    }

    ::-webkit-scrollbar-track {
        background: transparent; /* Track background */
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${defaultTheme.colors.primary.main};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${defaultTheme.colors.primary.dark};
    }
`;

export const ProposalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    overflow-y: auto;
    height: 100%;
    ::-webkit-scrollbar {
        width: 12px; /* Width of the scrollbar */
    }

    ::-webkit-scrollbar-track {
        background: transparent; /* Track background */
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${defaultTheme.colors.primary.main};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${defaultTheme.colors.primary.dark};
    }
`;

export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
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
