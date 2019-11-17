import React from 'react';
import {useInput} from "../hooks";
import {DatePicker} from "antd";

const Search = () => {
    const [keyword, onchange] = useInput();
    const onSubmit = e => {
        e.preventDefault();

    };

    const range = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={keyword} onChange={onchange} />
            <button type="submit">검색</button>

            <p>상세검색</p>
            <DatePicker.RangePicker onChange={range} />
        </form>
    );
};

export default Search;
