import React from 'react';

import { useRefinementList } from 'react-instantsearch-hooks-web';

import * as S from './Refinement.styles';

import * as Interface from './Refinement.types';

export default function Refinement(props: Interface.RefinementPropTypes) {
    const { items, refine } = useRefinementList(props);

    return (
        <ul>
            {items.map((item) => (
                <li key={item.label}>
                    <label>{item.label}</label>
                    <input
                        type="checkbox"
                        value={item.value}
                        checked={item.isRefined}
                        onChange={() => refine(item.value)}
                    />
                </li>
            ))}
        </ul>
    );
}
