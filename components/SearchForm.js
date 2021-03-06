import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { DatePicker, Button, Icon, Select } from "antd";

const SearchForm = ({ keyword, onchange, getSearch, input }) => {
	const [view, setView] = useState(true);
	const [dataRange, setDataRange] = useState([]);
	const [select, setSelect] = useState("");
	const dateFormat = "YYYY-MM-DD";
	function disabledDate(current) {
		return current && current > moment().endOf("day");
	}

	const onSubmit = e => {
		e.preventDefault();
		getSearch(dataRange, select);
	};

	const handleDetail = useCallback(() => {
		setView(!view);
	}, [view]);

	const range = useCallback((date, dateString) => {
		// console.log(dateString);
		setDataRange(dateString);
	}, []);

	const selectChange = useCallback(value => {
		// console.log(value);
		setSelect(value);
	}, []);

	return (
		<form onSubmit={onSubmit} className="search">
			<div className="cell">
				<input type="text" value={keyword} onChange={onchange} ref={input} />
				<Button type="primary" shape="circle" icon="search" htmlType="submit" />
			</div>
			<div className="btn_detail">
				<button onClick={handleDetail}>상세검색 {view ? <Icon type="up-circle" /> : <Icon type="down-circle" />}</button>
			</div>
			<div className={`detail ${view ? "is-active" : ""}`}>
				<div className="cell">
					<span className="label">기간</span>
					<DatePicker.RangePicker
						onChange={range}
						disabledDate={disabledDate}
						format={dateFormat}
					/>
				</div>
				<div className="cell">
					<span className="label">분류</span>
					<Select defaultValue="publishedAt" onChange={selectChange}>
						<Select.Option value="publishedAt">PublishedAt(dafault)</Select.Option>
						<Select.Option value="popularity">Popularity</Select.Option>
						<Select.Option value="relevancy">Relevancy</Select.Option>
					</Select>
				</div>
			</div>
		</form>
	);
};

SearchForm.prototype = {
	keyword: PropTypes.string,
	onchange: PropTypes.func,
	getSearch: PropTypes.func,
	input: PropTypes.element,
};

export default SearchForm;
