import React from "react";
import projectList from "../Store/data";
import ProjectCardUI from "../Components/Page/ProjectCardUI";
function Home() {
  return (
    <div className="container p-5 text-white">
      <div className="h3 text-success">Project List</div>
      <div className="row">
        {projectList.map((project, index) => (
          <ProjectCardUI project={project} key={index} ></ProjectCardUI>
        ))}
      </div>
    </div>
  );
}

export default Home;
