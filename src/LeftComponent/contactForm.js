import React, { Component } from "react";
//importing in axios
import axios from "axios";
//importing in the react strap components i use in this file
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
// this is a stateful component because there is data being set on state.
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //setting the values of the input group to empty
      email: "",
      phone: "",
      company: "",
      message: "",
      // setting the modal to false so it does not pop up the component is rendered.
      modal: false
    };
// binding the toggle to this class
    this.toggle = this.toggle.bind(this);
  }
  //toggle function that changed the state of the modal.
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  sendMessage = event => {
    // setting the message to a constant that is an empty object
    const message = {};
    //these if's check if the input is NOT empty,
    if (this.state.email !== "") {
      // if they are not empty then set the message objects key of email is set to the email on the state,
      message.email = this.state.email;    }
    if (this.state.phone !== "") {
      message.phone = this.state.phone;    }
    if (this.state.company !== "") {
      message.company = this.state.company;
    }
    if (this.state.message !== "") {
      message.message = this.state.message;
    }
 
    
// here we make a axios request
    axios
    // the request is a post, and we pass in the object that we created and added in the state values,
    // this request is made to my herokuapp, if it's a little slow it's due to my heroku dyno being asleep, but it should run correctly after waking.
      .post("https://jacob-lyerla-resume.herokuapp.com/messages", message)
      .then(respone => {
        // this toggles the modal when you successfully submit an object
        this.toggle();
        // this resets the the state, so all the strings we entered in are cleared and the state is just emprty strings
        this.setState({
          email: "",
          phone: "",
          company: "",
          message: ""
        });
      })
      // if the post does not work this will catch that and log  an error into the console.
      .catch(err => {
        console.log(err);
      });
  };
  //this so as the input is changed it sets the target value the value is state, this is how we get the values changed on state,
  // so when we hit submit the state is not an empty string,
  handleInputChange = element => {
    this.setState({ [element.target.name]: element.target.value });
  };
  render() {
    return (
      <Card className="contactCard-styles">
        <CardBody>
          <Label className="contactLabel-styles">Email</Label>
          <Input
          // so when the input is changed it calls handleInputChange, that sets the chnge on state.
            onChange={this.handleInputChange}
            //place holder text for when notihng is inside the input
            placeholder="Email..."
            // this sets the value, of the input to the value on state, the name needs to match the value on state in order for tihs to work
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
          {/* when this button is clicked it calls the axios post function i have nemed sendMessage,
          there is an anonymous function, that keeps it from triggering more than once */}
          <Button onClick={() => this.sendMessage()}>Send Message</Button>
          {/* this is the modal, everything is being set up here  */}
          <Modal
          // checking if the modal is open this wil return true of false
            isOpen={this.state.modal}
            // setting the toggle function on the Modal for changing the toggle props
            toggle={this.toggle}
            // setting the class name to the className on props
            className={this.props.className}
          >
          {/* this is the modal header, it will be displayed above the body */}
            <ModalHeader toggle={this.toggle}>Message Sent</ModalHeader>
            {/* the modal body is the main text of the modal */}
            <ModalBody>
              Thank you for taking the time to contact me, i will be sure to get back to you.
              Also if you have any feedback about my resume, please let me know.
            </ModalBody>
            <ModalFooter>
              {/* the modal button is set up and i gave it it's own class to style with,
              when you click the button it will toggle, setting the true to a false and closing */}
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
