import React from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';

import Results from '../../components/Results/Results';

import * as S from './Home.styles';

import * as Interface from './Home.types';

export default function Home() {
    const auth: Interface.HomeAuthPropTypes = {
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
            >
                <SearchBox />
                <Results />
            </InstantSearch>
        </S.Container>
    );
}
