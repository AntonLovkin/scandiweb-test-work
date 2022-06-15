import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import styles from './styles.module.css';
import { nanoid } from 'nanoid'

const AddProductView = () => {
    const navigate = useNavigate();

    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [switcher, setSwitcher] = useState('dvd');
    const [size, setSize] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');
    const [weight, setWeight] = useState('');

    const inputChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;

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
            case 'size':
                setSize(value)
                break;
            case 'height':
                setHeight(value)
                break;
            case 'width':
                setWidth(value)
                break;
            case 'length':
                setLength(value)
                break;
            case 'weight':
                setWeight(value)
                break;

            default:
                break;
        }
    };

    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;

        switch (value) {
            case 'dvd':
                setSwitcher(value)
                break;
            case 'furniture':     
                setSwitcher(value)
                break;
            case 'weight':
                setSwitcher(value)
                break;

            default:
                break;
        }
        switcherHandleChange();
    };

    const switcherHandleChange = () => {
        setSize('');
        setHeight('');
        setWidth('');
        setLength('');
        setWeight('');
    };

    const addProduct = (product) => {
        const products = JSON.parse(window.localStorage.getItem('products'));

        if (products.find(({ sku }) => sku === product.sku)) {
            alert(`A product SKU ${product.sku} already exists`);
        } else {
            const newProducts = [...products, product];
            window.localStorage.setItem('products', JSON.stringify(newProducts))
            // console.log(products)
            clearForm();
            navigate('/');
        }
    }

    const onFormSubmit = evt => {
        evt.preventDefault();

        const productData = { sku, name, price, size, height, width, length, weight, id: nanoid(), checked: false }
        // console.log({sku, name, price, size, height, width, length, weight });

        addProduct(productData);
    };

    const clearForm = () => {
        setSku('');
        setName('');
        setPrice('');
        setSize('');
        setHeight('');
        setWidth('');
        setLength('');
        setWeight('');
    };

    return (
        <>
            <h1>Product Add Page</h1>
            <hr/>
            <form id='product_form'
                className={styles.form}
                onSubmit={onFormSubmit}>
                <label className={styles.label}>
                    SKU
                    <input
                        onInvalid={()=>alert('You must fill out the form!')}
                        id='sku'
                        value={sku}
                        type="text"
                        name="sku"
                        pattern="[a-zA-Z0-9]+"
                        title="Please, provide sku"
                        onChange={inputChange}
                        autoComplete="off"
                        required
                    />
                </label>
                 <label className={styles.label}>
                    Name
                    <input
                        id='name'
                        value={name}
                        type="text"
                        name="name"
                        pattern="[a-zA-Z0-9]+"
                        title="Please, provide name"
                        onChange={inputChange}
                        autoComplete="off"
                        required
                    />
                </label>
                 <label className={styles.label}>
                    Price
                    <input
                        id='price'
                        value={price}
                        type="text"
                        name="price"
                        pattern="[0-9]+"
                        title="Please, provide price"
                        onChange={inputChange}
                        // autoComplete="off"
                        required
                    />
                </label>
                
                 <label className={styles.label}>
                    Type Switcher
                    <select id='productType' onChange={handleChange}>
                        <option value="dvd">DVD Size, MB</option>
                        <option value="furniture">Furniture H*W*L</option>
                        <option value="weight">Book weight, kg</option>
                    </select>
                </label>

                {switcher === 'dvd' &&
                     <label className={styles.label}>
                        Size, MB
                        <input
                            id='size'
                            value={size}
                            type="text"
                            name="size"
                            pattern="[0-9]+"
                            title="Please, provide size"
                            onChange={inputChange}
                            // autoComplete="off"
                            required
                        />
                    </label>}

                {switcher === 'furniture' &&
                    <>
                     <label className={styles.label}>
                            Height (CM)
                            <input
                                id='height'
                                value={height}
                                type="text"
                                name="height"
                                pattern="[0-9]+"
                                title="Please, provide height"
                            onChange={inputChange}
                            // autoComplete="off"
                                required
                            />
                        </label>
                         <label className={styles.label}>
                            Width (CM)
                            <input
                                id='width'
                                value={width}
                                type="text"
                                name="width"
                                pattern="[0-9]+"
                                title="Please, provide width"
                            onChange={inputChange}
                            // autoComplete="off"
                                required
                            />
                        </label>
                         <label className={styles.label}>
                            Length (CM)
                            <input
                                id='length'
                                value={length}
                                type="text"
                                name="length"
                                pattern="[0-9]+"
                                title="Please, provide length"
                            onChange={inputChange}
                            // autoComplete="off"
                                required
                            />
                        </label>
                    </>}

                {switcher === 'weight' &&
                     <label className={styles.label}>
                        Weight (CM)
                        <input
                            id='weight'
                            value={weight}
                            type="text"
                            name="weight"
                            pattern="[0-9]+"
                            title="Please, provide weight"
                            onChange={inputChange}
                            // autoComplete="off"
                            required
                        />
                    </label>}
                
                <button type="submit">Save</button>

                <Link to="/">
                    <button type="button" onClick={clearForm}>Cancel</button>
                </Link>
            </form>
        </>
    );
}

export default AddProductView;