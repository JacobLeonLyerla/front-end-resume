import React, { Component, Fragment } from "react";
// this is where i import my reactstrap elements
import { Link } from "react-router-dom";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";
import Progress from "../RightComponent/progress"
// setting up a class that extends from the Component, that is given from react,
// another way to do tihs is to use "React.Component" then you do not need to import Component, but i prefer just to import it.
class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //setting up the number of the current tab that can be active.
      activeTab: "1"
    };
    // binding toggle to this class
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    // this is saying that if the tab you toggled is not the currently active tab, then set that tab to acti
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      //*************************************************** ADD NEW LINK ITEM TO ROUTE TO PROJECT COMPONENT  */

      // Gragment alows the return of multiple elements without wrapping them into one jsx div.
      <Fragment>
              <Col md="4" lg="4">
        {/* this is a nav tabs call gives them all the reactstap tabs styling */}
        <Nav tabs>
          {/* this is what gives the navitem the default reactstrap css goodies,  */}
          <Link to= "/" style={{textDecoration:'none',color:'black'}}>
          <NavItem>
            {/* the nav link sets the number of the active tab, and when that tab is clicked it passes that number into toggle, */}
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              {/* This is the text that will be displayed for the nav item. */}
              Contact info
            </NavLink>
          </NavItem>
          </Link>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Contact me
            </NavLink>
          </NavItem>
          <Link to= "/projects" style={{textDecoration:'none',color:'black'}}>
            <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >   
              Projects
              </NavLink>
            </NavItem>
          </Link>
          {/* create a third link, that displays the project compoent */}
        </Nav>
        {/* this checks the active tab */}
        <TabContent activeTab={this.state.activeTab}>
          {/* this ties the content to the tab by the id */}
          <TabPane tabId="1">
         
                {/* This is where i render the content for the tab it's another component that contains the info displayed */}
                <ContactInfo />
          

          </TabPane>
          <TabPane tabId="2">
            <ContactForm />
          </TabPane>

     
          <TabPane tabId="3">
      <div className="leftProgress-styles">
<Progress/>
</div>
            </TabPane>
        
            
        </TabContent>
        </Col>
      </Fragment>
    );
  }
}
//exporting the component here so that i can import it in other files.
export default LeftPanel;
