import React, { Component } from "react";
import { connect } from "react-redux";
import AllProduct from "./AllProduct";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {getProducts} from "../../store/actions/productaction"
class Products extends Component {
  componentDidMount() {
   this.props.getProducts()
    console.log(this.props.products)
  }

  render() {
    return (
        <div className="container">
          {/* <div className="row">{productContent}</div> */}
          {this.props.products && this.props.products.length ? this.props.products.map((item, index)=>{
           return <div>
           <Card>
             <CardImg top width="100%" src={item.productimage}alt="Card image cap" />
             <CardBody>
               <CardTitle>Title : {item.title}</CardTitle>
               <CardSubtitle>price : {item.price}</CardSubtitle>
               <CardText>Des : {item.description}</CardText>
               <Button>Add To Cart</Button>
             </CardBody>
           </Card>
         </div>
          }) : null}
        </div>
    );
  }
}


const mapStateToProps = state => {
  console.log(state, "staet")
 return ({
   products: state.product.products,
    loading : state.loading
});
}

function mapDispatchToProp(dispatch) {
  return ({
      getProducts: () => dispatch(getProducts()),
  })
}


export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Products);


