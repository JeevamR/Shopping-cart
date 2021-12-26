import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  setProduct,
  incrementCount,
  changeSelectedProduct
} from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const cartItems = products.allProducts.products;

  // fetches product object from the api call
  const fetchProductLists = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // goes to action and returns object which will inturn taken by reducer
      dispatch(setProduct(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductLists();
  }, []);

  // function to add items to cart
  const onAddToCart = (productss) => {
    cartItems.forEach((x) => {
      if (x.id === productss.id) {
        if (x.count === undefined) {
          let abc = Object.assign(productss, { count: 1 });

          cartItems.forEach((element, index) => {
            if (element.id === abc.id) {
              cartItems[index] = abc;
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

  return (
    <div className="ui grid container">
      {Object.keys(cartItems).map((item) => (
        <div className="product-card" key={cartItems[item].id}>
          <LazyLoadImage
            className="product-cover"
            src={cartItems[item].image}
            width="280px"
            alt=""
            onError={(event) => {
              event.target.src =
                "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
              event.onerror = null;
            }}
          />
          <p className="product-title"> {cartItems[item].title} </p>
          <button
            key={cartItems[item].id}
            className="button"
            id={cartItems[item].id}
            onClick={() => onAddToCart(cartItems[item])}
          >
            ADD to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
