import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phone: "",
      company: "",
      message: "",
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  sendMessage = event => {
    const message = {};
    message.email = this.state.email;
    message.phone = this.state.phone;
    message.company = this.state.company;
    message.message = this.state.message;

    axios
      .post("https://jacob-lyerla-resume.herokuapp.com/messages", message)
      .then(respone => {
        this.toggle();
        this.setState({
          email: "",
          phone: "",
          company: "",
          message: ""
        });
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
          <Button onClick={() => this.sendMessage()}>Send Message</Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Message Sent</ModalHeader>
            <ModalBody>
              Thank you for taking the time to contact me, i will be sure to get back to you.
              Also if you have any feedback about my resume, please let me know.
            </ModalBody>
            <ModalFooter>
              <Button className="modalbutton-styles" onClick={this.toggle}>
                Close
              </Button>
            
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    );
  }
}
export default ContactForm;
