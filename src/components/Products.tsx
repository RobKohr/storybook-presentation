import Product, { ProductData } from "./Product";

interface ProductsProps {
  products: ProductData[];
  handleAddToCart: (id: string) => void;
  cartCounts: { [id: string]: number };
}

export default function Products(props: ProductsProps) {
  const { products, handleAddToCart, cartCounts } = props;
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <Product key={product.id} {...product} handleAddToCart={handleAddToCart} cartCount={cartCounts[product.id]}></Product>
        ))}
      </ul>
    </div>
  );
}
