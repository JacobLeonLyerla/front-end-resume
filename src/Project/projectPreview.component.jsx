import React, { Component } from "react";
import { PROJECT_DATA } from "./project.data";
import { Row, Col } from "reactstrap";
import ProjectDependencies from "./projectDependencies.component";
import ProjectImage from "./projectImage.component";
import "../css/project.css"
class ProjectPreview extends Component {
  state = {
    arrow: 0,
  };

  render() {
    const leftArrow = () => (
        
        <i
          className="fas fa-arrow-left fa-2x"
          onClick={() => projectPreviewSelect(-1)}
        />
     
    );
    const rightArrow = () => (
      
        <i
          className="fas fa-arrow-right fa-2x"
          onClick={() => projectPreviewSelect(1)}
        />
      
    );
console.log(this.state.arrow)
    const project = PROJECT_DATA;

    const projectPreviewSelect = (direction) => {
      let { arrow } = this.state;
      if (arrow + direction < 0)
        return this.setState({ arrow: (arrow = project.length - 1) });
      if (arrow + direction > project.length - 1)
        return this.setState({ arrow: 0 });
      return this.setState({ arrow: (arrow = arrow + direction) });
    };
    return (
      <Row className="preview-container">
        <ProjectDependencies
          key={project.id}
          project={project[this.state.arrow]}
        />

        <ProjectImage
          key={project.id}
          project={project[this.state.arrow]}
          leftArrow={leftArrow}
          rightArrow={rightArrow}
        />
      </Row>
    );
  }
}

export default ProjectPreview;
