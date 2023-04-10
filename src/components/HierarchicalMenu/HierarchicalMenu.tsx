import React from 'react';

import { useHierarchicalMenu } from 'react-instantsearch-hooks-web';

import * as S from './HierarchicalMenu.styles';

import * as Interface from './HierarchicalMenu.types';

export default function HierarchicalMenu(
    props: Interface.HierarchicalMenuPropTypes
) {
    const { items, refine } = useHierarchicalMenu(props);

    return (
        <ul>
            {items.map((item) => (
                <li key={item.label}>
                    <label>{item.label}</label>
                    <input
                        type="checkbox"
                        value={item.value}
                        onChange={() => refine(item.value)}
                    />
                </li>
            ))}
        </ul>
    );
}
