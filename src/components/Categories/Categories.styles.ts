import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    margin: 40px 0 40px 20px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Category = styled.section`
    padding: 15px;
    background-color: #bbbbbb;
    border-radius: 10px;
    margin: 0 20px 0 0;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        filter: brightness(90%);
    }
`;
