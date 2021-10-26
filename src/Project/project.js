import React, { Component } from "react";

import { PROJECT_DATA } from "./project.data";
import {
  CardText,
  CardBody,
  Card,
  CardLink,
  CardImg,
  CardTitle,
  Button,
  Col,
} from "reactstrap";

import { Link } from "react-router-dom";

const Note = () => {
  const {img,title,description,githubFrontend} = PROJECT_DATA
  return (
    <Col md="7" className="singleCard-styles">
      <Card key={id}>
        <CardBody>
          <CardImg src={img} />

          <CardTitle>{title}</CardTitle>

          <CardText>{description}</CardText>

          <CardLink href={this.state.project.github}>
            <div style={{ color: "black" }}>Links</div>:
            {this.state.project.github}
          </CardLink>

          <CardLink href={this.state.project.youtube}>
            {this.state.project.youtube}
          </CardLink>
        </CardBody>

        <Link to={"/projects"} style={{ textDecoration: "none" }}>
          <Button>Project List</Button>
        </Link>
      </Card>
    </Col>
  );
};

export default Note;
