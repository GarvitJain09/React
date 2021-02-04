import React, { Component } from "react";
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem,
    Jumbotron,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input, 
    Row
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

class CommentForm extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    
    handelSubmit(value){
        console.log(value)
    }
    
    render(){
        return(
            
            <Modal isOpen={this.props.isModelOpen} toggle={!this.props.isModelOpen}>
            <ModalHeader toggle={!this.props.isModelOpen}>hi</ModalHeader>
        <LocalForm onSubmit={this.handelSubmit}>
            <Row className="form-group">
                <Label htmlFor="rating">
                    Rating
                </Label>
                <Control.select model=".rating" name="rating" className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Control.select>
            </Row>
            <Row className="form-group">
            <Label htmlfor="yourname">
                Your Name
            </Label>
            <Control.text model=".yourname" name="yourname" className="form-control"></Control.text>
            </Row>
            <Row className ="form-group">
                <Label htmlfor="comment">
                    Comment
                </Label>
                <Control.textarea model=".comment" name ="comment" className="form-control" rows={6} ></Control.textarea>
            </Row>
            <Row className ="form-group">
                <Button type="submit" color="primary">Submit</Button>
            </Row>
        </LocalForm>
        </Modal>
        )
    }
}


export default CommentForm