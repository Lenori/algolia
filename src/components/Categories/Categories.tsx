import React from 'react';

import filters from '../../state/filters/allFilters.json';

import * as S from './Categories.styles';

import * as Interface from './Categories.types';

export default function Categories() {
    const categories = filters.categories;

    return (
        <S.Container>
            {categories.map((item: any) => (
                <S.Category key={item.value}>{item.description}</S.Category>
            ))}
        </S.Container>
    );
}
