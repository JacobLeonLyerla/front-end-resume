import React from 'react';
import { Progress,Label } from 'reactstrap';

const RightPanel = () => {
  return (
    <div className="progress-styles">
        <Label className="label-styles">Coding Skillz</Label>
        <div className="progress-styles">
         <div className="text-left">React</div>
      <Progress value="90" /> 
      <div className="text-left">JavaScript</div>
      
      <Progress value="85" />
    <div className="text-left">CSS</div>
      <Progress value="70" />
       <div className="text-left">HTML</div>
      <Progress value="65" />
      <div className="text-left">C++</div>
      <Progress value="60" />
      </div>
     
      </div>
      )
      }
      export default RightPanel