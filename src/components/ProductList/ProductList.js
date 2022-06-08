import ProductListItem from './ProductListItem/ProductListItem'

const ProductList = ({ onChange, products }) => {
    return (
        <ul className="ProductsGallery">
            {products.map(product =>
                <ProductListItem
                    key={product.id}
                    item={product}
                    onChange={onChange} />
            )}
        </ul>
    )
}

export default ProductList;