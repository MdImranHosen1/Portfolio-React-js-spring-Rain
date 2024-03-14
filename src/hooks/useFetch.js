import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [quoteDate, setQuoteDate] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const fetchQuote = async () => {
        setIsLoading(true);

        const response = await fetch(url);
        const data = await response.json();
        setQuote(data[0].content);
        setAuthor(data[0].author);
        setQuoteDate(data[0].dateAdded);
        setIsLoading(false);

    };
    useEffect(() => {
        fetchQuote();
    }, [url]);

    return { author, quote, quoteDate, isLoading, fetchQuote };
};

export default useFetch;

