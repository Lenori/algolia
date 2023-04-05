import React from 'react';

import * as S from './Results.styles';

import { useHits } from 'react-instantsearch-hooks-web';

import Result from '../Result/Result';

export default function Results() {
    const { hits } = useHits();

    return (
        <S.Container>
            {hits.map((item) => (
                <Result key={item.objectID} hit={item} />
            ))}
        </S.Container>
    );
}
