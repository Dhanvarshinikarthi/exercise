import React from "react";
import "./addprojects.css";
const Projects = () => {
  return (
    <div className="projects_main">
      <form>
        <div className="addprojects">
          <h2>Add Projects</h2>
          <input type="text" placeholder="Project title" required />
          <textarea
            placeholder="Project Description"
            rows={10}
            cols={10}
          ></textarea>
        </div>
        <div className="preview">
          <h2>Preview</h2>
          <input type="file" required />
        </div>
      </form>
    </div>
  );
};
export default Projects;
