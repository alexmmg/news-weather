import {React, useState, useEffect} from 'react';
import * as axios from "axios";
import ArticleItem from "./ArticleItem";

const News = () => {

  const [news, setNews] = useState([]);

  const newsApiKey = "55a0258f13144130b0c6729c32cac542"

  useEffect(() => {
    const response = axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`)
        .then(response =>
            setNews(response.data.articles));

  }, [])

  console.log(news);

  const newsItem = news.map( (el) => (
    <ArticleItem key={el.url} title={el.title} author={el.author} description={el.description} urlToImage={el.urlToImage} />
    ))

  return (
      <div>
        {newsItem}
      </div>
  );
};

export default News;