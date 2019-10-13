import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
  

class AllProduct extends Component {
    render() {
        const { products } = this.props;
        console.log(products)
        
        return (
            <div> data </div>
        )
        // ;
    }
}

export default AllProduct;