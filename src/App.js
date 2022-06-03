import { Component } from 'react';
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";
import ProductAddPage from "./components/ProductAddPage/ProductAddPage";
import ProductList from "./components/ProductList/ProductList";


class App extends Component {
  render() {
    return (
      <>
        <Form />
        <Button />
        <ProductAddPage />
        <ProductList />
      </>
    );
  }
}

export default App;
