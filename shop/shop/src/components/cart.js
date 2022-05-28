import React, { useEffect, useState } from "react";

export default function Cart({ data, setPageType, cartData, setCartData }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [render, setRender] = useState(false);
  useEffect(() => {
    let price = 0;
    if (cartData.length > 0) {
      cartData.map((item) => {
        price = price + item.price * item.quantity;
      });
    }
    setTotalPrice(Math.round(price * 100) / 100);
  }, [render]);

  return (
    <div>
      {" "}
      <div style={{ marginLeft: "5rem" }}>
        <h2
          style={{
            display: "inline",
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
            marginLeft: "4rem",
          }}
          onClick={() => {
            setPageType("products-page");
          }}
        >
          Back
        </h2>
        <h1
          style={{
            display: "inline",
            marginLeft: "25rem",
            textAlign: "center",
          }}
        >
          Cart
        </h1>

        <h5
          style={{
            display: "inline",
            marginLeft: "15rem",
          }}
        >
          <span style={{ marginRight: "1rem", color: "indigo" }}>
            Total Price:
          </span>
          ${totalPrice}
        </h5>
      </div>
      <hr />
      {cartData.length > 0 ? (
        cartData.map((item, i) => {
          return (
            <div
              className="card "
              style={{
                width: "20rem",
                height: "32rem",
                display: "inline-block",
                margin: "1rem",
              }}
              key={item.id}
            >
              <div className="card-body">
                <h5
                  className="card-header"
                  style={{ textAlign: "center", height: "4rem" }}
                >
                  {item.title}
                </h5>
                <img
                  src={item.filename}
                  style={{
                    width: "18rem",
                    height: "15rem",
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div style={{ width: "18rem", height: "20rem" }}>
                  <h6
                    className="card-text"
                    style={{ textAlign: "justify", fontWeight: "normal" }}
                  >
                    {item.description}
                  </h6>
                  <h6>
                    <span
                      style={{ color: "blueviolet", marginRight: "0.25rem" }}
                    >
                      Unit Price:
                    </span>
                    ${item.price}
                  </h6>
                  <h6>
                    <span style={{ color: "blue", marginRight: "0.25rem" }}>
                      Quantity:
                    </span>
                    <input
                      value={item.quantity}
                      onChange={(e) => {
                        //console.log(cartData[i].quantity);
                        let array = cartData;
                        array[i].quantity = e.target.value;
                        //console.log(array[i].quantity);
                        setCartData(array);
                        setRender(!render);
                      }}
                    />
                  </h6>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div style={{ textAlign: "center" }}>No Data Found</div>
      )}
    </div>
  );
}
