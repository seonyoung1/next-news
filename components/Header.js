import React from 'react';
import Link from "next/link";
import PropTypes from "prop-types";
import {useRouter} from "next/router";
import {Icon} from "antd";

const Header = () => {
    const categoryList = [
        {
            id: 0,
            title: "business",
            address: "business"
        },
        {
            id: 1,
            title: "technology",
            address: "technology"
        },
        {
            id: 2,
            title: "science",
            address: "science"
        },
        {
            id: 3,
            title: "entertainment",
            address: "entertainment"
        },
        {
            id: 4,
            title: "sport",
            address: "sport"
        },
        {
            id: 5,
            title: "health",
            address: "health"
        },
    ];
    const routes = useRouter();
    return (
        <header>
            <h1><Link href="/"><a>News</a></Link></h1>
            <nav>
                <ul>
                    {categoryList.map(item =>
                        <List title={item.title} address={item.address} key={item.id} query={routes.query.title} />
                    )}
                </ul>
            </nav>
            {/*scroll={false}*/}
            <Link href="/search"><a  className={`search ${routes.pathname==="/search"?"is-active":""}`}><Icon type="search" /></a></Link>
        </header>
    );
};

const List = ({address, title, query}) => {
    return(
        <li className={address === query?"is-current":""}>
            <Link href="/category/[title]" as={`/category/${address}`}><a>{title}</a></Link>
        </li>
    )
};

List.propTypes = {
    address: PropTypes.string,
    title: PropTypes.string,
    query: PropTypes.string,
};

export default Header;
