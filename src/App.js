import "./styles.css";
import Header from "../src/containers/Header";
import ProductListing from "../src/containers/ProductListing";
import Basket from "../src/containers/Basket";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <ProductListing />
        <Basket />
      </div>
    </div>
  );
}
