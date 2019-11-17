import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <h1>News</h1>
            <nav>
                <ul>
                    <li><Link href="/category"><a>Business</a></Link></li>
                    <li><Link href="/category"><a>Science</a></Link></li>
                    <li><Link href="/category"><a>Entertainment</a></Link></li>
                    <li><Link href="/category"><a>Sport</a></Link></li>
                    <li><Link href="/category"><a>Health</a></Link></li>
                    <li><Link href="/category"><a>Technology</a></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
