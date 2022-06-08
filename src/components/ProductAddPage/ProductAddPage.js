import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useLocation } from "react-router";
import styles from './styles.module.css';
import { nanoid } from 'nanoid'

const ProductAddPage = ({addProduct}) => {
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

    const onFormSubmit = evt => {
        evt.preventDefault();

        const productData = {sku, name, price, size, height, width, length, weight, id: nanoid() }
        // console.log({sku, name, price, size, height, width, length, weight });
        addProduct(productData);
        // setSku('');
        // setName('');
        // setPrice('');
        clearForm();
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
            <h1>Product Add</h1>
            <form className={styles.form} onSubmit={onFormSubmit}>
                <label className={styles.label}>
                    SKU
                    <input
                        id='sku'
                        value={sku}
                        type="text"
                        name="sku"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Please, provide sku"
                        onChange={inputChange}
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
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Please, provide name"
                        onChange={inputChange}
                        required
                    />
                </label>
                <label className={styles.label}>
                    Price
                    <input
                        id='price'
                        value={price}
                        type="number"
                        name="price"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Please, provide price"
                        onChange={inputChange}
                        required
                    />
                </label>
                
                <label className={styles.label}>
                    Type Switcher
                    <select id='productType' onChange={handleChange}>
                        <option id='DVD' value="dvd">DVD Size, MB</option>
                        <option id='Furniture' value="furniture">Furniture H*W*L</option>
                        <option id='Book' value="weight">Book weight, kg</option>
                    </select>
                </label>

                {switcher === 'dvd' &&
                    <label className={styles.label}>
                        Size, MB
                        <input
                            id='size'
                            value={size}
                            type="number"
                            name="size"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Please, provide size"
                            onChange={inputChange}
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
                                type="number"
                                name="height"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Please, provide height"
                                onChange={inputChange}
                                required
                            />
                        </label>
                        <label className={styles.label}>
                            Width (CM)
                            <input
                                id='width'
                                value={width}
                                type="number"
                                name="width"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Please, provide width"
                                onChange={inputChange}
                                required
                            />
                        </label>
                        <label className={styles.label}>
                            Length (CM)
                            <input
                                id='length'
                                value={length}
                                type="number"
                                name="length"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Please, provide length"
                                onChange={inputChange}
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
                            type="number"
                            name="weight"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Please, provide weight"
                            onChange={inputChange}
                            required
                        />
                    </label>}
                
                <button type="submit" >Save</button>

                <Link to="/">
                    <button type="button" onClick={clearForm}>Cancel</button>
                </Link>
            </form>
        </>
    );
}

export default ProductAddPage;