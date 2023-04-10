interface _highlightResultMetaData {
    value: string;
    matchLevel: string;
    matchedWords: string[];
    fullyHighlighted?: boolean;
}

interface _highlightResult {
    name: _highlightResultMetaData;
    rating: _highlightResultMetaData;
    image_path: _highlightResultMetaData;
    alternative_name: _highlightResultMetaData;
}

export interface HitsPropTypes {
    name: string;
    rating: number | null;
    image_path: string | null;
    alternative_name: string | null;
    objectID: string;
    _highlightResult: _highlightResult;
    __position: number;
}

export interface ResultsPropTypes {
    query: string;
    index: string;
}
