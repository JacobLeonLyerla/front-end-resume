import React from "react";

import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";

import selfie from "../assets/selfie.jpg";

const Header = () => {
  return (
    <Col md="8" lg="8">
      <Card>
        <CardImg
          className="selfie"
          top
          width="100%"
          src={selfie}
          alt="Picture of a wizard reading."
        />

        <CardBody>
          <CardTitle>About Me</CardTitle>

          <CardText>
            <p style={{ textAlign: "center" }}>
              My journey to becoming a software developer started while studying
              computer science in college. While I was introduced to C#
              applications and C++, what stuck with me the most was utilizing
              the fundamental skills of problem solving and learning that the
              coding language is essential just a tool we use to solve problems.
            </p>

            <p style={{ textAlign: "center" }}>
              Over the past year, I've moved into learning JavaScript. After
              joining an immersive program at Lambda School for learning
              software development, I feel very confident with the language at
              this point. Inside of this program I have not only learned new
              frameworks and skills, but real-world approaches to
              problem-solving. One of the advantages of my program is the
              opportunity to work with people coming from a variety of
              backgrounds who have novel approaches to problem-solving. It's
              definitely made it easier for me to rethink, break down, and build
              out my own coding solutions, and I know i've grown so much as a
              developer as a result.
            </p>

            <p style={{ textAlign: "center" }}>
              I'm still close to my Lambda School cohort, and having committed
              to doing daily pair programming, I know that I greatly enjoy
              working inside a team structure. Moving forward, I am interested
              in working for a company that values teamwork and communication,
              working for a company that would allow me to grow as a developer,
              with a team that pushes and guides me.
            </p>

            <p style={{ textAlign: "center" }}>
              I really enjoy being a developer, and I am very excited to
              continue to grow my skill set on a team that values teamwork,
              excellence, and continued growth.
            </p>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Header;
