import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Icon } from "antd";

const Pagination = props => {
	const { current, total } = props;
	const Len = Number(Math.ceil(total / 10));
	const page = Array.from({ length: Len }, (v, i) => i);
	let first = current - 1;
	if (first <= 0) first = 1;
	let last = current + 1;
	if (last > Len) last = Len;
	return (
		<div className="pagination">
			<ul>
				<li>
					<Link href={`/?page=${first}`} as={`/${first}`}>
						<a title="Prev Page">
							<Icon type="left-circle" />
						</a>
					</Link>
				</li>
				{page.map(i => (
					<li key={i} className={i + 1 === current ? "on" : ""}>
						<Link href={{ pathname: "/", query: { page: i + 1 } }} as={`/${i + 1}`}>
							<a>{i + 1}</a>
						</Link>
					</li>
				))}
				<li>
					<Link href={`/?page=${last}`} as={`/${last}`}>
						<a title="Next Page">
							<Icon type="right-circle" />
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

Pagination.propTypes = {
	current: PropTypes.number,
	total: PropTypes.number,
};

export default Pagination;
