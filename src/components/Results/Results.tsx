import React, { useEffect } from 'react';

import { useInstantSearch } from 'react-instantsearch-hooks-web';

import Result from '../Result/Result';

import * as S from './Results.styles';

import * as Interface from './Results.types';

export default function Results(props: Interface.ResultsPropTypes) {
    const { results } = useInstantSearch();

    const products = JSON.parse(JSON.stringify(results.hits));

    return (
        <S.Container>
            <S.ResultsCount>
                {results.nbHits} results found for the query{' '}
                <span>{results.query}</span>
            </S.ResultsCount>
            <S.ResultsContainer>
                {products.map(({ objectID, title, image_link, lvl2 }: any) => (
                    <Result
                        key={objectID}
                        title={title}
                        image={image_link}
                        lvl2={lvl2}
                    />
                ))}
            </S.ResultsContainer>
        </S.Container>
    );
}
