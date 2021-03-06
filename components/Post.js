import React from "react";
import PropTypes from "prop-types";

const Post = ({ data }) => {
	if (!data) return;
	return (
		<>
			<div className="thumb">
				<div>
					<div>
						<img src={data.urlToImage && data.urlToImage.includes("http") ? data.urlToImage : "/images/default.png"} alt={data.title} />
					</div>
				</div>
			</div>
			<div className="contents">
				<div className="title">{data.title}</div>
				<div className="desc">{data.description}</div>
				<a href={data.url} rel="noopener noreferrer" target="_blank">
					더보기
				</a>
			</div>
		</>
	);
};

Post.propTypes = {
	data: PropTypes.object,
	title: PropTypes.string,
};

export default Post;
