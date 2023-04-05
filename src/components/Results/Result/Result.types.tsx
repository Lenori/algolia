interface _highlightResultMetaData {
    value: string;
    matchLevel: string;
    matchedWords: string[];
    fullyHighlighted?: boolean;
}

interface _highlightResult {
    name?: _highlightResultMetaData;
    rating?: _highlightResultMetaData;
    image_path?: _highlightResultMetaData;
    alternative_name?: _highlightResultMetaData;
}

interface HitsPropTypes {
    name?: string;
    rating?: number | null;
    image_path?: string | null;
    alternative_name?: string | null;
    objectID: string;
    _highlightResult?: _highlightResult | undefined;
    __position: number;
}

export interface ResultPropTypes {
    hit: any;
}
