import React from 'react';

import algoliasearch from 'algoliasearch/lite';
import { getAlgoliaResults } from '@algolia/autocomplete-js';

import AutoComplete from '../../components/AutoComplete/AutoComplete';
import Result from '../../components/Result/Result';

import * as S from './Autocomplete.styles';

import * as Interface from './Autocomplete.types';

export default function Autocomplete() {
    const auth: Interface.AutocompleteAuthPropTypes = {
        algolia_app_id: process.env.REACT_APP_ALGOLIA_APP_ID || '',
        algolia_api_key: process.env.REACT_APP_ALGOLIA_API_KEY || '',
    };

    const searchClient = algoliasearch(
        auth.algolia_app_id,
        auth.algolia_api_key
    );

    return (
        <S.Container>
            <AutoComplete
                openOnFocus={true}
                getSources={({ query }: any) => [
                    {
                        sourceId: 'querySuggestions',
                        getItems() {
                            return getAlgoliaResults({
                                searchClient,
                                queries: [
                                    {
                                        indexName:
                                            'dev_offwhite_query_suggestions',
                                        query,
                                    },
                                ],
                            });
                        },
                        templates: {
                            item({ item, components }: any) {
                                return (
                                    <Result
                                        hit={item}
                                        components={components}
                                    />
                                );
                            },
                        },
                    },
                ]}
            />
        </S.Container>
    );
}
