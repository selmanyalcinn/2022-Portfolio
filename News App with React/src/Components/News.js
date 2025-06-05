import React from "react";
import "../App.css";

export default function News({ title, description, url, urlToImage }) {
  return (
    <div className="New">
      <div className="NewImages">
        <img className="NewImage" src={urlToImage} alt="New Image" />
      </div>
      <div className="NewInfos">
        <h3 className="NewTitle">{title}</h3>
        <p className="NewDetail">{description}</p>
      </div>

      <button
        className="ReadButton"
        onClick={() => window.location.assign(url)}
      >
        Read
      </button>
    </div>
  );
}
