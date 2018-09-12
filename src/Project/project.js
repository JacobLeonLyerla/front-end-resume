import React,  { Component } from "react";
import axios from 'axios'

import {  CardText,CardBody, Card,CardLink,CardImg,
    CardTitle,Button,Col  } from 'reactstrap';
    import {Link} from 'react-router-dom';

class Note extends Component{
constructor(props){
    super(props)
    this.state={
        project:[],
    };

}
componentDidMount(){
    const {id} = this.props.match.params
    console.log(id)
    console.log(id)
    this.getProjectById(id)
}
getProjectById =id=>{

    axios
    .get(`https://jacob-lyerla-resume.herokuapp.com/projects/${id}`)
    .then(response =>{
        console.log(response)
        this.setState(()=>({project:response.data}))
    })
    .catch(err=>{
        console.log("failed to get note")
    })
}
render(){
    console.log(this.props)
    return(
 
<Col md="7" className="singleCard-styles">
              <Card key={this.state.project._id}>
              
                <CardBody>
                 <CardImg src={this.state.project.img} />
                  <CardTitle>{this.state.project.title}</CardTitle>

                    <CardText>{this.state.project.description}</CardText>
              
                  <CardLink href={this.state.project.github}>
                  <div style={{color:"black"}}>Links</div>:{this.state.project.github}
                 </CardLink> 
                
                  <CardLink href={this.state.project.youtube}>{this.state.project.youtube}</CardLink>
                </CardBody>
                
                <Link
                  to={'/projects'}
                  style={{ textDecoration: "none" }}
                >
                
                  <Button>Project List</Button>
                </Link>
              </Card>
              </Col>

   
 
    )
}
}
export default Note;