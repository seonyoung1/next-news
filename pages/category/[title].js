import React from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import PropTypes from "prop-types";
import Post from "../../components/Post";

const List = props => {
	const router = useRouter();
	return (
		<div className="page_list">
			<h2 className="sub_title">{router.query.title}</h2>
			<ul className="news_list">
				{props.result.map((content, idx) => (
					<li key={idx} className="post">
						<Post data={content} />
					</li>
				))}
			</ul>
		</div>
	);
};

List.getInitialProps = async function({ query }) {
	const res = await fetch(`https://newsapi.org/v2/top-headlines?q=&country=kr&category=${query.title}&apiKey=5dc506f2b92745a682db92e9aee902b7`);
	const data = await res.json();
	return {
		result: data.articles,
	};
};

List.propTypes = {
	result: PropTypes.array,
};

export default List;
