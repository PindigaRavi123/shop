import "bootstrap/dist/css/bootstrap.min.css";

export default function Products({ data, setPageType, cartData, setCartData }) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            display: "inline",
          }}
        >
          Products Page
        </h1>
        <h2
          style={{
            display: "inline",
            color: "blue",
            marginLeft: "10rem",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            setPageType("cart");
          }}
        >
          Go to Cart
        </h2>
      </div>

      <hr />
      {data &&
        data.map((item, i) => {
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
                {/* <div style={{ width: "18rem", height: "20rem" }}> */}
                <div>
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
                      Rating:
                    </span>
                    {item.rating}
                  </h6>
                </div>
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    setCartData([...cartData, item]);
                  }}
                  style={{ justifyContent: "center", alignContent: "center" }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
