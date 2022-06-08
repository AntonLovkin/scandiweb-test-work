import styles from './ProductListItem.module.css';

const ProductListItem = ({ item, onChange }) => {
    
    const { sku, name, price, size, height, width, length, weight, id, checked } = item;
    return (
        <li className={styles.ProductsGalleryItem}>
            <input
                type="checkbox"
                className="delete-checkbox"
                name="checkbox"
                value="checkbox"
                checked={checked}
                onChange={() => { onChange(id) }}
            />
            <p>{sku}</p>
            <p>{name}</p>
            <p>{price} $</p>
            {size && <p>Size: {size} MB</p>}
            {weight && <p>Weight: {weight}KG</p>}
            {length && <p>Dimension: {width}x{height}x{length}</p>}
        </li>   
    );
}

export default ProductListItem;