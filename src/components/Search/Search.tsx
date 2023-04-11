import React from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-hooks-web';

import Results from '../../components/Results/Results';

import * as S from './Search.styles';

import * as Interface from './Search.types';

export default function Search(props: Interface.SearchPropTypes) {
    const auth: Interface.SearchAuthPropTypes = {
        algolia_app_id: process.env.REACT_APP_ALGOLIA_APP_ID || '',
        algolia_api_key: process.env.REACT_APP_ALGOLIA_API_KEY || '',
        algolia_index_name: process.env.REACT_APP_ALGOLIA_INDEX_NAME || '',
    };

    const searchClient = algoliasearch(
        auth.algolia_app_id,
        auth.algolia_api_key
    );

    return (
        <S.Container>
            <InstantSearch
                searchClient={searchClient}
                indexName={auth.algolia_index_name}
                routing={true}
            >
                <Configure filters="lvl0:man" query={props.query} />
                <Results />
            </InstantSearch>
        </S.Container>
    );
}
