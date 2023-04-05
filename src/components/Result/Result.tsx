import React from 'react';

import * as S from './Result.styles';

import { Highlight } from 'react-instantsearch-hooks-web';

import * as Interface from './Result.types';

export default function Result(props: Interface.ResultPropTypes) {
    return (
        <S.Container>
            <article>
                <h1>
                    {props.components ? (
                        <props.components.Highlight
                            attribute="name"
                            hit={props.hit}
                        />
                    ) : (
                        <Highlight attribute="name" hit={props.hit} />
                    )}
                </h1>
                <p>{props.hit.alternative_name}</p>
            </article>
        </S.Container>
    );
}
