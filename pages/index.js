import React from "react";
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
import Post from "../components/Post";
import Pagination from "../components/Pagination";

const Home = ({ result, page, total }) => {
	return (
		<div className="page_main">
			<h2 className="sub_title">Top Headline News</h2>
			<ul className="news_list">
				{result.length > 0 ? (
					<>
						{result.map((content, idx) => (
							<li key={idx} className="post">
								<Post data={content} />
							</li>
						))}
					</>
				) : (
					<li className="empty">데이터가 없습니다. 이전페이지로 돌아가주세요</li>
				)}
			</ul>
			<Pagination current={page} total={total} />
		</div>
	);
};

Home.getInitialProps = async function({ query: { page = 1 } }) {
	const response = await fetch(`https://newsapi.org/v2/top-headlines?country=kr&pageSize=100&apiKey=5dc506f2b92745a682db92e9aee902b7`);
	const data = await response.json();
	const total = data.totalResults;
	const currentPage = parseInt(page, 10);
	let per = 10; //한페이지당 기사 갯수
	let first = (page - 1) * per;
	let last = page * per - 1;
	const sliceData = data.articles.slice(first, last);
	return {
		result: sliceData,
		page: currentPage,
		total: total,
	};
};

Home.propTypes = {
	result: PropTypes.array,
	page: PropTypes.number,
	total: PropTypes.number,
};

export default Home;
