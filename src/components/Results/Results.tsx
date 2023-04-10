import React, { useEffect } from 'react';

import { useInstantSearch } from 'react-instantsearch-hooks-web';

import * as S from './Results.styles';

import * as Interface from './Results.types';

export default function Results(props: Interface.ResultsPropTypes) {
    const { results, setUiState } = useInstantSearch();

    useEffect(() => {
        setUiState({
            [props.index]: {
                query: props.query,
            },
        });
    }, [props.query]);

    const products = JSON.parse(JSON.stringify(results.hits));

    return (
        <ul>
            {results.nbHits} results found for the query {results.query}.
            {products.map(({ objectID, title, image_link, price }: any) => {
                return (
                    <li key={objectID}>
                        <img src={image_link} />
                        <span>{title}</span>
                        <span>{price}</span>
                    </li>
                );
            })}
        </ul>
    );
}
