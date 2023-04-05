/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createElement, Fragment, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import { autocomplete } from '@algolia/autocomplete-js';

import * as S from './AutoComplete.styles';

export default function AutoComplete(props: any) {
    const containerRef = useRef<any>(null);
    const panelRootRef = useRef<any>(null);
    const rootRef = useRef<any>(null);

    useEffect(() => {
        if (!containerRef.current) {
            return undefined;
        }

        const search = autocomplete({
            container: containerRef.current,
            renderer: { createElement, Fragment, render: () => {} },
            render({ children }, root) {
                if (!panelRootRef.current || rootRef.current !== root) {
                    rootRef.current = root;

                    panelRootRef.current?.unmount();
                    panelRootRef.current = createRoot(root);
                }

                panelRootRef.current.render(children);
            },
            ...props,
        });

        return () => {
            search.destroy();
        };
    }, [props]);

    return <S.Container ref={containerRef} />;
}
