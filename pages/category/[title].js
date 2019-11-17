import React from 'react';
import {useRouter} from "next/router";

const Title = () => {
    const router = useRouter();
    // console.log(router);
    return (
        <div>
            <h2>{router.query.title}</h2>
            <div>
                목록
            </div>
        </div>
    );
};

export default Title;
