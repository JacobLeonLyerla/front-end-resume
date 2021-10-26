import React from "react";
import { Col } from "reactstrap";
import Progress from "./progress";
const RightPanel = () => {
  return (
    <Col md="4" lg="4" className="proficiencies-container">
      <Progress />
    </Col>
  );
};
export default RightPanel;
