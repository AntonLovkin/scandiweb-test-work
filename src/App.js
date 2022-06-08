import { Component, Suspense, lazy } from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import Button from "./components/Button/Button";
// import ProductAddPage from "./components/ProductAddPage/ProductAddPage";
// import ProductList from "./components/ProductList/ProductList";

import './styles.css';

const ProductList = lazy(() => import('./components/ProductList/ProductList'));
const ProductAddPage = lazy(() => import('./components/ProductAddPage/ProductAddPage'));

class App extends Component {
  state = {
    products: [
      {name: 'Anton', checked: false, id: 0, size: 100 },
      { name: 'Tom', checked: false, id: 1, weight: 400 },
      { name: 'Kate', checked: false, id: 2, length: 250, width: 100, height: 150 },
      { name: 'Ann', checked: false, id: 3, size: 400 }, 
    ],
  };

  componentDidMount() {
    if (this.state.products.length === 0 ) return;
    this.setState({products: JSON.parse(window.localStorage.getItem('products'))})
   }
  
  componentDidUpdate(prevProps, prevState) { 
    if (prevState.products.length !== this.state.products.length || prevState.products.length === 0) {
      window.localStorage.setItem('products', JSON.stringify(this.state.products))
    }
  } 
  
  addProduct = (data) => {
    const product = { ...data, checked: false };
    console.log(product)
    // this.setState(prevState => console.log(prevState.products));
    this.setState(prevState => ({ products: [product, ...prevState.products] }));
    // console.log(this.state.products);
  }

  handleOnChangeCheckbox = (productId) => {
    // console.log(productId)
    this.setState(prevState => (
      {
        products: prevState.products.map(product => {
          if (productId === product.id) {
          return {...product, checked: !product.checked}
          }
          return product;
      }) }));
  }

  deleteCheckedProducts = () => {
    this.setState(prevState => ({
        products: prevState.products.filter(el => el.checked === false)
      }))
  }

  render() {
    const { products } = this.state;
    return (
      <>
        
        {/* <h2>ProductList</h2> */}
        <AppBar>
          {/* <Link to='/'>
            <Button onClick={() => { }}>
              <p>List</p>
            </Button >
          </Link> */}

          <Link to='/addproduct'>
            <Button onClick={() => { }}>
              <p>Add</p>
            </Button >
          </Link>
          
        
          <Button onClick={() => { this.deleteCheckedProducts() }}>
            <p>Mass delete</p>
          </Button>
        </AppBar>

        {/* <ProductList onChange={this.handleOnChangeCheckbox} products={products} /> */}

        {/* <ProductAddPage addProduct={this.addProduct} /> */}
  
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList onChange={this.handleOnChangeCheckbox} products={products} />} />
            <Route path="/addproduct" element={<ProductAddPage addProduct={this.addProduct} />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}

export default App;
