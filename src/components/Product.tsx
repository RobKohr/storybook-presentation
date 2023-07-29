import "./Product.scss";

export interface ProductData {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  isOnSale: boolean;
}

export interface ProductProps extends ProductData {
  handleAddToCart: (id: string) => void;
  cartCount: number;
}
export default function Product(props: ProductProps) {
  const { id, name, price, description, image, isOnSale, handleAddToCart, cartCount } = props;
  return (
    <div className={`product ${isOnSale ? "on-sale" : ""}`}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <img src={image} alt={name} />
      {isOnSale && <p className="on-sale-label">On sale!</p>}
      <div>
        <button
          onClick={() => {
            handleAddToCart(id);
          }}
        >
          Add to cart
        </button>{" "}
        ({cartCount ? cartCount : 0}) in cart
      </div>
    </div>
  );
}
