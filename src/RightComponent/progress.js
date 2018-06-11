import React from "react";
import { Progress, Label,Col } from "reactstrap";

const ProgressBars = () => {
  return (
 
     //i could use a row and column her but i just used a div instead. 
    <div className="progress-styles">
      {/* this is where i set and style the label header */}
      <Label className="label-styles">Proficiencies</Label>
      {/* this is where i set the container style for all the progress bars */}
      <div className="progress-styles">
        {/* this is the label for one of the bars and the text is set to display on the left end of the div */}
        <div className="text-left">React</div>
        <Progress value="90" />
        <div className="text-left">Axios</div>
        <Progress value="80" />
        <div className="text-left">Redux</div>
        <Progress value="70" />
        {/* i set the value of the bar here */}
        <div className="text-left">JavaScript</div>
        <Progress value="85" />
        <div className="text-left">MongoDB</div>
        <Progress value="75" />
        <div className="text-left">Mongoose</div>
        <Progress value="85" />
        <div className="text-left">Node.js</div>
        <Progress value="70" />
        <div className="text-left">Express</div>
        <Progress value="80" />
        <div className="text-left">CSS</div>
        <Progress value="70" />
        <div className="text-left">HTML</div>
        <Progress value="65" />
        <div className="text-left">C++</div>
        <Progress value="50" />
      </div>
    </div>
  
  );
};
export default ProgressBars;
