import React, { useEffect, useState } from "react";
import "../style/Mytrapage.css";

function MytraPage() {
  const [img, setImg] = useState([]);
  const [product, setProduct] = useState("");
  const [productDetails, setproductDetails] = useState("");
  useEffect(() => {
    setImg([
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7642262/2018/10/16/ac36cc6e-2771-411d-9133-2dbf6027c66b1539674786439-Girls-Dress-8311539674786205-1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7642262/2018/10/16/0da31ae3-8e1c-4b0d-b63b-bff434d3bfb61539674786392-Girls-Dress-8311539674786205-2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7642262/2018/10/16/3b9a8c93-0dc6-4bc5-ad69-4d876bfb08e61539674786349-Girls-Dress-8311539674786205-3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7642262/2018/10/16/2356f593-96b4-43fa-893d-11e667aef5fc1539674786306-Girls-Dress-8311539674786205-4.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7642262/2018/10/16/84a97352-f810-44f0-bd62-492c59e5aab41539674786271-Girls-Dress-8311539674786205-5.jpg",
    ]);
    setProduct("CUTECUMBER");
    setproductDetails("Girls Pink Solid Fit and Flare Dress");
  }, []);
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          {img.map((item, index) => (
            <img className="image" src={item} />
          ))}
        </div>

        <div className="details">
          <h2 className="title">{product}</h2>
          <h2 className="pdp-name">{productDetails}</h2>

          <div style={{ width: "100%" }}>
            <div>
              <div className="rating-box">5 star</div>
              <hr></hr>
            </div>
            <p>
              <span className="pdp-mrp">MRP</span>
              <strong>₹ 1700</strong>
            </p>
            <p className="pdp-vatInfo">inclusive of all taxes</p>
            {/* size */}
            <div className="sizebuttons-container">
              <p>
                <spna className="size-buttons-select-size">SELECT SIZE</spna>
                <span className="size-buttons-size-chart">SIZE CHART</span>
              </p>
              <div className="size-btns">
                <button className="size-btn">
                  <b>Xs</b>
                </button>
                <button className="size-btn">
                  <b>S</b>
                </button>
                <button className="size-btn">
                  <b>M</b>
                </button>
                <button className="size-btn">
                  <b>L</b>
                </button>
                <button className="size-btn">
                  <b>XL</b>
                </button>
              </div>
            </div>
          </div>

          {/* buttons */}

          <div className="btns">
            <button className="pdp-add-to-bag">
              <p>Logo</p>
              <p>ADD TO BAG</p>
            </button>
            <button className="pdp-add-to-wishlist">
              <p>Logo</p>
              <p>WISHLIST</p>
            </button>
          </div>

          <hr></hr>

          <div>
            <p className="para">100% Original Products</p>
            <p className="para">Pay on the delivery might be avaliable</p>
            <p className="para">Easy 14 days returns and exchange</p>
          </div>
          {/* product conatainer */}
          <div className="product-container">
            <p>
              <spna className="pdp-product-description-title">
                PRODUCT DETAILS
              </spna>
              <span>logo</span>
            </p>

            <p className="pdp-product-description">
              Pink solid knitted and woven fit and flare dress, has a round
              neck, sleeveless, button closure,, flared hem. Comes with a
              matching hairband.
            </p>

            <div className="size-fit-container">
              <p className="pdp-sizeFitDescTitle">
                <b>Size & Fit</b>
              </p>
              <p className="pdp-sizeFitContent">Regular fit</p>
            </div>

            <div className="material-container">
              <p className="pdp-sizeFitDescTitle">
                <b>Material & Care</b>
              </p>
              <p className="pdp-sizeFitContent">Polyester</p>
              <p className="pdp-sizeFitContent">Hand-wash</p>
            </div>

            {/* Specifications-conatainer */}

            <div className="specifications-conatainer">
              <p className="specifications-title">
                <b>Specifications</b>
              </p>

              <div className="all-specification">
                <div className="specification-content" style={{ width: "47%" }}>
                  <p className="specification-content-title">Shape</p>
                  <p className="specified-content">Fit and Flare</p>
                  <hr></hr>
                </div>

                <div style={{ width: "47%" }}>
                  <p className="specification-content-title">Shape</p>
                  <p className="specified-content">Fit and Flare</p>
                  <hr></hr>
                </div>
                <div style={{ width: "47%" }}>
                  <p className="specification-content-title">Shape</p>
                  <p className="specified-content">Fit and Flare</p>
                  <hr></hr>
                </div>
                <div style={{ width: "47%" }}>
                  <p className="specification-content-title">Shape</p>
                  <p className="specified-content">Fit and Flare</p>
                  <hr></hr>
                </div>
                <div style={{ width: "47%" }}>
                  <p className="specification-content-title">Shape</p>
                  <p className="specified-content">Fit and Flare</p>
                  <hr></hr>
                </div>
                <div style={{ width: "47%" }}>
                  <p className="specification-content-title">Shape</p>
                  <p className="specified-content">Fit and Flare</p>
                  <hr></hr>
                </div>
                <div style={{ width: "47%" }}>
                  <p className="specification-content-title">Shape</p>
                  <p className="specified-content">Fit and Flare</p>
                  <hr></hr>
                </div>

                <div style={{ width: "47%" }}>
                  <p className="specification-content-title">Shape</p>
                  <p className="specified-content">Fit and Flare</p>
                  <hr></hr>
                </div>

                <div style={{ width: "47%" }}>
                  <p className="specification-content-title">Shape</p>
                  <p className="specified-content">Fit and Flare</p>
                  <hr></hr>
                </div>

                <div style={{ width: "47%" }}>
                  <p className="specification-content-title">Shape</p>
                  <p className="specified-content">Fit and Flare</p>
                  <hr></hr>
                </div>
              </div>

              <div>
                <p className="completelook-title">
                  <b>Complete The Look</b>
                </p>
                <p className="completelook-content">
                  She will look and feel beautiful in this timeless dress by
                  CUTECUMBER. For an upscale weekend ensemble, style this pink
                  piece with a casual blazer and some chic heels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MytraPage;
