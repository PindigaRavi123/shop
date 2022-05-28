import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "../src/components/cart";
import Products from "../src/components/products";

function App() {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [pageType, setPageType] = useState("products-page");
  useEffect(() => {
    dataHandler();
  }, []);
  const dataHandler = async () => {
    await axios
      .get("https://api4286.s3.ap-south-1.amazonaws.com/products.json")
      .then((res) => {
        //console.log(res.data)
        let array = [];
        res.data.map((item) => {
          array.push({
            title: item.title,
            description: item.description,
            type: item.type,
            id: item.id,
            price: item.price,
            rating: item.rating,
            filename: item.filename,
            quantity: 1,
          });
        });
        setData(array);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {pageType === "products-page" && (
        <Products
          data={data}
          setPageType={setPageType}
          cartData={cartData}
          setCartData={setCartData}
        />
      )}
      {pageType === "cart" && (
        <Cart
          data={data}
          setPageType={setPageType}
          cartData={cartData}
          setCartData={setCartData}
        />
      )}
    </div>
  );
}

export default App;
