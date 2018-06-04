import React,{Component} from 'react'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ContactInfo from './contactInfo'
import ContactForm from './contactForm'
class LeftPanel extends Component{
constructor(props){
    super(props)
    this.state={
        activeTab: '1'
    }
    this.toggle = this.toggle.bind(this);
}
toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
render(){
    return(<React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
             Contact info
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
             Contact me
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ContactInfo/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <ContactForm/>
       
          </TabPane>
        </TabContent>
    </React.Fragment>)
}
}
export default LeftPanel