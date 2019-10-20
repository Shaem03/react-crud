import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import ProducItem from './product-item'
import AddItem from './AddItem'

const products = [
  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 500
  }
];
localStorage.setItem('products', JSON.stringify(products));

class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount() {

    const products = this.getProducts();
    this.setState({ products });
  }

  getProducts() {
    return this.state.products; 
  }

  onAdd(name, price){
    const products = this.getProducts();

    products.push({
      name,
      price
    });
    this.setState({products});
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });
    console.log(filteredProducts);
    this.setState({products: filteredProducts});
  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts();
    
    products = products.map(product => {
      if (product.name === originalName){
        product.name = name;
        product.price = price;
      }

      return product;
    });
    this.setState({ products });
  }

  render() {
    return (

      <div className ="App">
        <h1> Product Manager </h1>
        <AddItem
          onAdd = {this.onAdd}
        />
        {
          this.state.products.map(product => {
            return (
              <ProducItem
                key = {product.name}
                {...product}
                onDelete = {this.onDelete}
                onEditSubmit = {this.onEditSubmit}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;