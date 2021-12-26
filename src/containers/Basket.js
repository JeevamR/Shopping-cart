import { useDispatch, useSelector } from "react-redux";
import {
  incrementCount,
  decrementCount,
  changeSelectedProduct
} from "../redux/actions/productActions";

export default function Basket() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);

  const cartItems = products.allProducts.products;
  const selectedProducts = products.allProducts.selectedProduct;

  // function to selected product into the cart by adding count attribute
  const onAddCart = (productss) => {
    cartItems.forEach((x) => {
      if (x.id === productss.id) {
        if (x.count === undefined) {
          let product_list = Object.assign(productss, { count: 1 });

          cartItems.forEach((element, index) => {
            if (element.id === product_list.id) {
              cartItems[index] = product_list;
            }
          });
        } else {
          x.count++;
        }
      }
    });

    dispatch(incrementCount());
    dispatch(changeSelectedProduct(productss));
  };

  // function to selected product into the cart by removing count attribute
  const onRemove = (productss) => {
    const cartItems = filter_lists();
    cartItems.forEach((x) => {
      if (x.id === productss.id) {
        x.count === 0 ? resetCount(productss) : x.count--;
      }
    });
    dispatch(changeSelectedProduct(productss));
    dispatch(decrementCount());
  };

  // function to resets count value to 0
  const resetCount = (productss) => {
    cartItems.forEach((x) => {
      if (x.id === productss.id) {
        if (x.count === undefined) {
          let product_list = Object.assign(productss, { count: 0 });

          cartItems.forEach((element, index) => {
            if (element.id === product_list.id) {
              cartItems[index] = product_list;
            }
          });
        }
      }
    });
  };

  const cartList = Object.keys(selectedProducts).map(
    (obj, index) => selectedProducts[obj].enableButtonFlag
  );

  // removes duplicate id object from product lists
  const filter_lists = () =>
    cartList.filter((type, index) => cartList.indexOf(type) === index);

  return (
    <aside className="block">
      <h2> Cart Items </h2>
      {selectedProducts &&
        filter_lists().map(
          (item) =>
            item.count !== 0 && (
              <div key={item.id}>
                <p> Name: {item.title} </p>
                <h4> Qty: {item.count} </h4>
                <button
                  onClick={() => {
                    onAddCart(item);
                  }}
                >
                  {" "}
                  +{" "}
                </button>
                <button
                  onClick={() => {
                    onRemove(item);
                  }}
                >
                  {" "}
                  -{" "}
                </button>
              </div>
            )
        )}

      <div>
        {products.allProducts.count === 0 ? (
          <div>Cart is Empty</div>
        ) : (
          <h1> Total Items: {products.allProducts.count} </h1>
        )}
      </div>
    </aside>
  );
}
