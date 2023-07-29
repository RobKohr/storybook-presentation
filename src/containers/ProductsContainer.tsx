import { useCallback, useContext, useEffect, useState } from "react";
import { ProductData } from "../components/Product";
import Products from "../components/Products";
import { ShoppingCartContext, ShoppingCartContextProvider } from "../contexts/ShoppingCartContext";

export default function ProductsContainer() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const { cartCounts, cartCountsDispatch } = useContext(ShoppingCartContext);
  const handleAddToCart = useCallback(
    (id: string) => {
      cartCountsDispatch({ type: "add", payload: { id } });
    },
    [cartCountsDispatch]
  );

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <ShoppingCartContextProvider>
      <Products products={products} handleAddToCart={handleAddToCart} cartCounts={cartCounts}></Products>
    </ShoppingCartContextProvider>
  );
}
