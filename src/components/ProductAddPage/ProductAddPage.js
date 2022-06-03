import { useState } from "react";

const ProductAddPage = () => {
    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const inputChange = ({ target }) => {
        //  console.log(target.name);
        const { name, value } = target;
console.log(value);
    switch (name) {
      case 'sku':
        setSku(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'price':
        setPrice(value);
        break;  

      default:
        break;
    }
  };

    const onFormSubmit = evt => {
        evt.preventDefault();

        console.log({sku, name, price});
        // addProduct(info);
        setSku('');
        setName('');
        setPrice('');
    };

    const clearForm = () => {
        setSku('');
        setName('');
        setPrice('');
    }

    return (
        <>
            <h1>Product Add</h1>
            <form onSubmit={onFormSubmit}>
                <label>
                    SKU
                    <input
                        id='sku'
                        value={sku}
                        type="text"
                        name="sku"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={inputChange}
                        required
                    />
                </label>
                <label>
                    Name
                    <input
                        id='name'
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={inputChange}
                        required
                    />
                </label>
                <label>
                    Price
                    <input
                        id='price'
                        value={price}
                        type="number"
                        name="price"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={inputChange}
                        required
                    />
                </label>
                <button type="submit">Save</button>
                <button type="button" onClick={clearForm}>Cancel</button>
            </form>
        </>
    );
}

export default ProductAddPage;