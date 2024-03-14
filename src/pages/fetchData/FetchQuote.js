import React, { useEffect, useState } from 'react';
import './fetchData.css';
import { Loading } from '../../components/loading/Loading';
import useFetch from '../../hooks/useFetch';
const url = 'https://api.quotable.io/quotes/random';

export const FetchQuote = () => {

    const { author, quote, quoteDate, isLoading, fetchQuote } = useFetch(url);

    return (
        <div id='fetchQuote' className='fetchQuote-main-div'>
            <div><h1>Fetch Quote</h1></div>
            <div className='fetchQuote-card-div'>
                {isLoading ? <Loading /> :
                    <div>
                        <h2>{quote}</h2>
                        <h4>{author}</h4>
                        <h5>{quoteDate}</h5>
                    </div>}
            </div>
            <span onClick={fetchQuote} className="show-fetchQuote-button-style">Fetch Quote</span>
        </div>
    )
}
