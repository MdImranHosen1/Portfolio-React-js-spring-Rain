import React, { useEffect, useState } from 'react'
import { RecommendCard } from './RecommendCard'
import './recommend.css'
import { Loading } from '../../components/loading/Loading';
import useFetch from '../../hooks/useFetch';

export const Recommend = () => {

    const [users, setUsers] = useState(null);


    const dataFetch = useFetch("https://dummyjson.com/users");


    function handleClickShowRecommend() {
        const [data] = dataFetch;
        setUsers(data.users);
    }

    return (
        <div id='recommendation' className='recommend-main-div'>
            <div><h1>Recommended by</h1></div>
            <div className='recommend-card-div'>
                {!users ? <Loading></Loading> : users.map((user) => {
                    return <div key={user.id}><RecommendCard user={user} /></div>

                })}

            </div>
            <span
                onClick={handleClickShowRecommend}
                className="show-recommendation-button-style">Fetch Data
            </span>


        </div>


    )
}
