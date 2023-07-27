import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
            }
            className="card-img-top "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-primary"> By {!author?"Unknown":author} on {new Date(date).toGMTString() } </small></p>
            <a href={newsUrl} target="_" className="btn btn-sm btn-dark">
              Read More.
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
