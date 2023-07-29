import "./App.css";
import ProductsContainer from "./containers/ProductsContainer";
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContext";

function App() {
  return (
    <div className="App">
      <h1>Our shop</h1>
      <ShoppingCartContextProvider>
        <ProductsContainer />
      </ShoppingCartContextProvider>
    </div>
  );
}

export default App;
