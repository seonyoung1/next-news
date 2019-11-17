import React from 'react';
import {useInput} from "../hooks";

const Search = () => {
    const [keyword, onchange] = useInput();
    const onSubmit = e => {
        e.preventDefault();

    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={keyword} onChange={onchange} />
            <button type="submit">검색</button>
        </form>
    );
};

export default Search;
