import React from "react";
import projectList from "../Store/data";

function TopicsCovered() {
  return (
    <div className="container p-5 text-white">
      <div className="h3 text-success">Topics Covered</div>
      <hr />
      <div className="row">
        {projectList.map((product, index) => (
          <div key={index} className="border rounded m-3 p-2">
            <div className="h5 text-center">{product.title} </div>
            <p>{product.describe}</p>
            <ul>
              {product.topicsCovered.map((topics, index) => (
                <li key={index}>{topics}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicsCovered;
