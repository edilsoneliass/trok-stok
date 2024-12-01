import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100px;
    width: calc(100% - 16px);
    color: white;
    display: flex;
    flex-direction: row;
    margin: 8px;
    border-radius: 4px;
    align-items: center;
`;

export const SidebarWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 8px;
    margin-right: 32px;
    :hover {
        cursor: pointer;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 48px;
    font-family: 'Jersey';
    color: white;
    width: 100%;
    text-align: left;
`;

export const SubTitle = styled.h1`
    font-size: 20px;
    color: white;
    width: 100%;
    text-align: left;
`;
