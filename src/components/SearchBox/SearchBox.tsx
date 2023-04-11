import React from 'react';

import * as S from './SearchBox.styles';

import * as Interface from './SearchBox.types';

export default function SearchBox(props: Interface.SearchBoxPropTypes) {
    return (
        <S.Container>
            <input
                type="text"
                value={props.query}
                onChange={(e) => props.setSearchQuery(e.target.value)}
            />
        </S.Container>
    );
}
