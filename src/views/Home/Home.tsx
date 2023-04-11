import React, { useState, useEffect } from 'react';

import Categories from '../../components/Categories/Categories';
import SearchBox from '../../components/SearchBox/SearchBox';
import Search from '../../components/Search/Search';

import * as S from './Home.styles';

import * as Interface from './Home.types';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('varsity');
    return (
        <S.Container>
            <Categories />
            <SearchBox
                query={searchQuery}
                setSearchQuery={(value: string) => setSearchQuery(value)}
            />
            <Search query={searchQuery} />
        </S.Container>
    );
}
