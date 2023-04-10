import React, { useState, useEffect } from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, useSearchBox } from 'react-instantsearch-hooks-web';

import HierarchicalMenu from '../../components/HierarchicalMenu/HierarchicalMenu';
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

    const VirtualSearchBox = (props: any) => {
        useSearchBox(props);

        return null;
    };

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setSearchValue('imprint');
    }, []);

    return (
        <S.Container>
            <InstantSearch
                searchClient={searchClient}
                indexName={auth.algolia_index_name}
                routing={true}
            >
                <VirtualSearchBox />
                <HierarchicalMenu attributes={['lvl0', 'lvl1', 'lvl2']} />
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Results query={searchValue} index={auth.algolia_index_name} />
            </InstantSearch>
        </S.Container>
    );
}
