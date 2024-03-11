import React, { useEffect, useState } from 'react'
import { RecommendCard } from './RecommendCard'
import './recommend.css'
import { Loading } from '../loading/Loading';

export const Recommend = () => {
    const [users, setUsers] = useState(null);


    const getUsersData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const obj = await response.json();
            const data = obj.users;
            console.log(data);
            if (data && data.length > 0) {
                setUsers(data.slice(0, 3));
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        getUsersData();
    }, []);

    function handleClickShowRecommend() {
        setUsers(null);
        getUsersData();
    }

    return (
        <div id='recommendation' className='recommend-main-div'>
            <div><h1>Recommended by</h1></div>
            <div className='recommend-card-div'>
                {!users?<Loading></Loading>:users.map((user) => {
                    return <div key={user.id}><RecommendCard user={user} /></div>

                })}
             
            </div>
            <span onClick={handleClickShowRecommend}
                className="show-recommendation-button-style">Show Recommendation
            </span>
            

        </div>


    )
}
