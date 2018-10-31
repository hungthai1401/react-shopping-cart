import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Message, Button } from "semantic-ui-react";
import { incrementCart, decrementCart, removeCart } from "../actions/cart";
import { incrementProduct, decrementProduct } from "../actions/product";

class Cart extends Component {
  constructor(props) {
    super(props);
    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);
    this._remove = this._remove.bind(this);
  }
  _total() {
    return this.props.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  _increment(event) {
    const target = event.target;
    const parentNode = target.parentNode;
    const id = parseInt(parentNode.getAttribute("data-id"));
    this.props.incrementCart(id);
    this.props.decrementProduct(id);
  }
  _decrement(event) {
    const target = event.target;
    const parentNode = target.parentNode;
    const id = parseInt(parentNode.getAttribute("data-id"));
    this.props.decrementCart(id);
    this.props.incrementProduct(id);
  }
  _remove(event) {
    const target = event.target;
    const id = parseInt(target.getAttribute("data-id"));
    const quantity = parseInt(target.getAttribute("data-quantity"));
    this.props.removeCart(id);
    this.props.incrementProduct(id, quantity);
  }
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          return (
            <List divided relaxed key={index}>
              <List.Item>
                <List.Icon data-id={item.id} data-quantity={item.quantity} name="trash" size="large" verticalAlign="middle" onClick={this._remove} />
                <List.Content>
                  <List.Header as="a">{item.title}</List.Header>
                  <List.Description as="a">
                    Quantity: {item.quantity}
                  </List.Description>
                  <Button.Group data-id={item.id}>
                    <Button onClick={this._increment}>
                      Increment
                    </Button>
                    <Button.Or />
                    <Button positive onClick={this._decrement}>
                      Descrement
                    </Button>
                  </Button.Group>
                </List.Content>
              </List.Item>
            </List>
          );
        })}
        <Message>
          <Message.Header>Total:</Message.Header>
          <p>{this._total()}</p>
        </Message>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    products: state.products
  };
};

const mapDispatchToProps = dispath => {
  return {
    incrementCart: id => {
      dispath(incrementCart(id));
    },
    decrementCart: id => {
      dispath(decrementCart(id));
    },
    incrementProduct: (id, quantity = 1) => {
      dispath(incrementProduct(id, quantity));
    },
    decrementProduct: id => {
      dispath(decrementProduct(id));
    },
    removeCart: id => {
      dispath(removeCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
