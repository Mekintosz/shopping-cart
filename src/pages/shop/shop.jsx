import { PRODUCTS } from "../../products"
import { Product } from "../../components/product"

export const Shop = () => {
    return (
    <div className="shop">
        <div className="shop-title">
            <h1>Mikes Bike Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => (
                <Product data={product} />
            ))}
        </div>
    </div>
    )
}