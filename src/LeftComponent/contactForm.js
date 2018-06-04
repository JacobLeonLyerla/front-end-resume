import React, { Component } from "react";
import axios from "axios";
import { Card, CardBody, Label, Input, Button } from "reactstrap";
class ContactForm extends Component {
  state = {
    email: "",
    phone: "",
    company: "",
    message: ""
  };
  sendMessage = event => {
    const message = {};
    message.email = this.state.message;
    message.phone = this.state.phone;
    message.company = this.state.company;
    message.message = this.state.message;

    axios
      .post("https://jacob-lyerla-resume.herokuapp.com/messages", message)
      .then(respone => {
        console.log("yata");
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Card className="contactCard-styles">
        <CardBody>
          <Label className="contactLabel-styles">Email</Label>
          <Input
            onChange={this.handleInputChange}
            placeholder="Email..."
            value={this.state.email}
            name="email"
          />
          <Label className="contactLabel-styles">Phone</Label>
          <Input
            onChange={this.handleInputChange}
            placeholder="Phone..."
            value={this.state.phone}
            name="phone"
          />
          <Label className="contactLabel-styles">Company</Label>
          <Input
            onChange={this.handleInputChange}
            placeholder="Company..."
            value={this.state.company}
            name="company"
          />
          <Label className="contactLabel-styles">Leave a message here</Label>
          <Input
            onChange={this.handleInputChange}
            className="message-styles"
            value={this.state.message}
            type="textarea"
            placeholder="Message..."
            name="message"
          />
          <Button>Send Message</Button>
        </CardBody>
      </Card>
    );
  }
}
export default ContactForm;
