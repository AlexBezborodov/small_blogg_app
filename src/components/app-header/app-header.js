import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Alex Bezborodov</h1>
            <h2>{allPosts} Записів, з них лайкнули {liked}</h2>
        </div>
    )
}

export default AppHeader;