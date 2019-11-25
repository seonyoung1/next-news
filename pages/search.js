import React, { useState, useRef, useCallback } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import Post from "../components/Post";
import "../styles/search.scss";

const Search = () => {
	const [keyword, setKeyword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [result, setResult] = useState(null);
	const input = useRef(null);

	const getSearch = useCallback(async (date, sort) => {
		if( keyword === "" ){
			alert("검색어를 입력해 주세요");
			input.current.focus();
			return;
		}
		let word = encodeURI(keyword);
		let from = date[0];
		let to = date[1];
		let today = getToday();
		if( from === undefined || from === "" ){
			from = today;
			to = today;
		}
		let sortBy = sort;
		if( sortBy === undefined || sortBy === "" ) sortBy = "publishedAt";
		// console.log(word, from, to, sortBy);
		try{
			const {data: { articles: res }} = await axios.get(`https://newsapi.org/v2/everything?q=${word}&from=${from}&to=${to}&sortBy=${sortBy}&language=en&apiKey=5dc506f2b92745a682db92e9aee902b7`);
			setResult(res);
			// console.log(res);
		} catch{
			setError(true);
		} finally{
			setIsLoading(false);
			setKeyword("");
		}
	}, [keyword]);

	const getToday = () => {
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth()+1;
		let yyyy = today.getFullYear();
		if(dd<10) dd='0'+dd;
		if(mm<10) mm='0'+mm;
		today = yyyy+'/'+ mm +'/'+dd;
		return today;
	};

	const onChange = e => {
		setKeyword(e.target.value)
	};

	return (
		<>
			<SearchForm keyword={keyword} onchange={onChange} getSearch={getSearch} input={input} />

			{error ? "데이터가 없습니다" :
				<>
				{isLoading ? "로딩중..." : (
					<>
						{result &&
							<>
							{result.length > 0 &&
								<ul className="news_list">
									{result.map((content,idx) =>
										<li key={idx} className="post">
											<Post data={content} />
										</li>
									)}
								</ul>
							}
							{result.length === 0  && "검색결과가 없습니다"}
							</>
						}
					</>
				)}
				</>
			}
		</>
	);
};

export default Search;
