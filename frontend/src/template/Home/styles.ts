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

export const ItemsDiv = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${defaultTheme.colors.secondary.main};
`;

export const ProposalDiv = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${defaultTheme.colors.secondary.main};
`;
