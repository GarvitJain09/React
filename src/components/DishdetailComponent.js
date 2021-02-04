import React,{} from 'react';
import {
        Card, 
        CardImg, 
        CardBody, 
        CardTitle, 
        CardText,
        Breadcrumb,
        BreadcrumbItem,
        Button,
        Modal,
        ModalHeader,
        ModalBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';


let isModelOpen = false
let istoggleNav = true
function CommentFormOpen() {
    isModelOpen = !isModelOpen
    
}

    function RenderDish({dish}){
        if(dish == null){
            return(<div></div>);
        }
        return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />                    
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}){
        if(comments == null){
            return(<div></div>);
        }
        console.log(comments)
        const showcmnts = comments.map((cmnt) => {
            return(
                <li key={cmnt.id}>
                    <p>{cmnt.comment}</p>
                    <p>--{cmnt.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(cmnt.date))}
                    </p>
                </li>
             
            );
        });

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {showcmnts}
                    <Button type="submit"onClick={CommentFormOpen}>Click</Button>
                    
                    
                </ul>
            </div>
        );
    }

    const DishDetail =(props)=>{

        const dish = props.dish;
        if(dish == null){
            return(<div></div>);
        }
        
        // const dishItem = this.renderDish(dish);
        // const dishComments = this.renderComments(dish.comments);
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>

                <Modal isOpen={isModelOpen} toggle={CommentFormOpen}>
                    <ModalHeader toggle={CommentFormOpen}>hi</ModalHeader>
                    <ModalBody>
                        <CommentForm></CommentForm>
                    </ModalBody>
                </Modal>

            </div>
            </div>
        );
    }


export default DishDetail;

