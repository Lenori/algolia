import React from 'react';

import * as S from './Result.styles';

import * as Interface from './Result.types';

export default function Result(props: Interface.ResultPropTypes) {
    return (
        <S.Container>
            <img src={props.image} />
            <S.Title>{props.title}</S.Title>
            <S.Category>{props.lvl2}</S.Category>
        </S.Container>
    );
}
