import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
`;

export const ResultsContainer = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

export const ResultsCount = styled.p`
    font-size: 12px;
    margin: 0 0 20px 20px;

    span {
        font-weight: bold;
    }
`;
