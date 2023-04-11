import styled from 'styled-components';

export const Container = styled.section`
    width: 25%;
    position: relative;

    img {
        width: 100%;
    }
`;

export const Title = styled.p`
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: black;
    color: var(--light-grey);
    padding: 10px;
    font-size: 12px;
    margin: 0;
`;

export const Category = styled.p`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    color: var(--light-grey);
    padding: 10px;
    font-size: 12px;
    margin: 0;
`;
