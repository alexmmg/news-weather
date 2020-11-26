import {React, useState, useEffect} from 'react';
import axios from "axios";
import ArticleItem from "./ArticleItem";

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const newsApiKey = "a91a6d0ebcf856b9cc11071c7e0557ef"

        const response = axios.get(`https://gnews.io/api/v4/search?q=example&token=${newsApiKey}`)
            .then(response => setNews(response.data.articles));
    }, [])

    const newsItem = news.map((el) => (
        <ArticleItem key={el.url} url={el.url} title={el.title} author={el.author} description={el.description}
                     urlToImage={el.image}/>
    ))

    return (
        <div>
            {newsItem}
        </div>
    );
};

export default News;