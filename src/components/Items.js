import React, { Component } from "react";
import { Grid, Card, Image, Button } from "semantic-ui-react";
import { addToCart } from "../actions/cart";
import { decrementProduct } from "../actions/product";
import { connect } from "react-redux";

class Items extends Component {
  constructor(props) {
    super(props);
    this._addToCart = this._addToCart.bind(this);
  }
  _addToCart(event) {
    const target = event.target;
    const id = parseInt(target.getAttribute("data-id"));
    const product = this.props.products.find(
      product => product.id === id
    );
    this.props.addToCart(product);
    this.props.decrementProduct(id);
  }
  render() {
    return (
      <Grid relaxed columns={4}>
        {this.props.products.map((product, index) => {
          return (
            <Grid.Column key={index}>
              <Card>
                <Image src="/images/wireframe/image.png" />
                <Card.Content>
                  <Card.Header>{product.title}</Card.Header>
                  <Card.Meta>
                    <span className="date">{product.price}</span>
                    <span className="date">{product.quantity}</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    data-id={product.id}
                    content="Add To Cart"
                    primary
                    onClick={this._addToCart}
                    disabled={product.quantity === 0 ? true : false}
                  />
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => {
      dispatch(addToCart(item));
    },
    decrementProduct: product => {
      dispatch(decrementProduct(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
