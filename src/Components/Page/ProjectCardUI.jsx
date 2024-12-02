import React from "react";

function ProjectCardUI({ project }) {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="col-12 col-sm-6 col-md-4 text-black">
      <div className="card m-3">
        <div className="card-body p-0">
          <div className="imageBox">
            <img
              src={project.imageUrl}
              style={{
                maxHeight: "200px",
                width: "100%",
                objectFit: "cover",
              }}
              alt="no content"
            />
         
            <div className="overlay">
              <button
                onClick={() => handleRedirect(project.redirectUrl)}
                className="btn btn-light"
              >
                <i className="bi bi-link-45deg"></i>
              </button>
            </div>
          </div>
          <div className="p-3">
            <h3>{project.title}</h3>
            <p>{project.describe}</p>
            <div style={{ textAlign: "center" }}>
              {project.gitHubUrl && (
                <button
                  onClick={() => {
                    handleRedirect(project.gitHubUrl);
                  }}
                  className="btn m-1 btn-dark"
                >
                  <i className="bi bi-github"></i> Github
                </button>
              )}
              {project.youtubeUrl && (
                <button
                  onClick={() => {
                    handleRedirect(project.youtubeUrl);
                  }}
                  className="btn m-1 btn-danger"
                >
                  <i className="bi bi-youtube"></i> Youtube
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardUI;
