import Axios from "axios";
import React, { useState, useEffect } from "react";
import News from "./News";
import "../App.css";

export default function NewsList(props) {
  const [article, setArticles] = useState([]);

  const getNews = async () => {
    const res = await Axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=02441faa66b34946a76c59600eb2f6de"
    );
    setArticles(res.data.articles);
  };

  const searchNews = async () => {
    const res = await Axios.get(
      "https://newsapi.org/v2/everything?q=" +
        props.SearchTerm +
        "&from=2022-08-01&sortBy=popularity&apiKey=02441faa66b34946a76c59600eb2f6de"
    );
    setArticles(res.data.articles);
  };

  useEffect(() => {
    if (props.SearchTerm == undefined) {
      getNews();
    } else {
      searchNews();
    }
  }, []);

  return (
    <div className="NewsSection">
      {article.map(({ title, description, url, urlToImage, content }) => {
        if (urlToImage != null) {
          return (
            <News
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
            />
          );
        }
      })}
    </div>
  );
}
