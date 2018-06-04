import React, { Component } from "react";
import { Card, CardBody,Label,Input,
     Button } from 'reactstrap';
class ContactForm extends Component{

render(){
    return(
        <Card className="contactCard-styles">
      
        <CardBody>
            <Label className="contactLabel-styles">Email</Label>
        <Input
            placeholder="Email..."
            name="email"
            />
             <Label className="contactLabel-styles">Phone</Label>
            <Input
            placeholder="Phone..."
            name="Phone"
            />
             <Label className="contactLabel-styles">Company</Label>
               <Input
            placeholder="Company..."
            name="Company"
            />
             <Label className="contactLabel-styles">Leave a message here</Label>
<Input
  type="textarea" 

  placeholder="Message..."
  name="Message"
/>
          <Button>Contact Me</Button>
        </CardBody>
      </Card>
    )
}
}
export default ContactForm;