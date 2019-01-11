import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";
import selfie from "../assets/selfie.jpg"
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
       <p> I studied computer science in college, learning starting with C# applications than learning C++, mostly learning the fundamental skills of problem solving, where the coding language is just a tool we use to solve problems. 
</p><p>
I have moved into learning JavaScript over the last year, and i feel very confident with the language at this point, i joined a hands on program for learning computer science in depth, i commit to doing daily pair programming and i enjoy working inside of a team structure.
</p><p>
Inside of this program i have learned new frameworks and skills, and ways to think about problems, i find it really good working with people with all different ways of solving problems, because it allows me to rethink how i break down and build out my own coding solutions, i feel like i am currently growing a lot in this manner.
</p><p>
Moving forward, i am interested in working for a company that values teamwork and communication, working for a company that would allow me to grow as a developer, with a team that pushes and guides me.
</p><p>
I really enjoy being a developer, and i am very excited to work with an awesome new team, talking about coding and solving problems with a team is a wonderful and growing practice.
</p>
Thank you for reading.


        </CardText>
      </CardBody>
    </Card>
    </Col>
  );
};

export default Header;
