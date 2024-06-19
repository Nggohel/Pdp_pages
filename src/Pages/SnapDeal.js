import React, { useEffect, useState } from "react";
import star from "../Images/star.svg";
import hollowstar from "../Images/hollowstar.svg";
import "../style/Snapdeal.css";
function SnapDeal() {
  const [productImg, setProductImg] = useState(null);
  const [thumbnailImg, setthumbnailImg] = useState(null);
  const Img = [
    "https://n2.sdlcdn.com/imgs/k/m/y/Femvy-Peach-Georgette-Women-s-SDL886501842-3-a6262.jpg",
    "https://n1.sdlcdn.com/imgs/k/m/y/Femvy-Peach-Georgette-Women-s-SDL886501842-4-875b1.jpg",
    "https://n2.sdlcdn.com/imgs/k/m/y/Femvy-Peach-Georgette-Women-s-SDL886501842-5-d297a.jpg",
    "https://n2.sdlcdn.com/imgs/k/m/y/Femvy-Peach-Georgette-Women-s-SDL886501842-3-a6262.jpg",
    "https://n1.sdlcdn.com/imgs/k/m/y/Femvy-Peach-Georgette-Women-s-SDL886501842-4-875b1.jpg",
    "https://n2.sdlcdn.com/imgs/k/m/y/Femvy-Peach-Georgette-Women-s-SDL886501842-5-d297a.jpg",
  ];
  useEffect(() => {
    setProductImg(Img);
    setthumbnailImg(Img);
  }, []);
  return (
    <>
      <div className="snapdeal-page">
        <div className="thumbnail-container"></div>
        <div className="mainimg-container"></div>
        <div className="details-container">
          <h1 className="product-name">
            Femvy - Peach Georgette Women's Fit & Flare Dress ( Pack of 1 )
          </h1>

          <div className="rating-container">
            <div>
              <img src={star} style={{ height: "15px", width: "15px" }} />
              <img src={star} style={{ height: "15px", width: "15px" }} />
              <img src={star} style={{ height: "15px", width: "15px" }} />
              <img src={star} style={{ height: "15px", width: "15px" }} />
              <img src={hollowstar} style={{ height: "15px", width: "15px" }} />
            </div>
            <div className="avrg-rating">(3.9)</div>
            <div className="total-rating">
              <span style={{ marginRight: "6px" }}>106 Rating</span>
              <span
                style={{ borderLeft: "1px solid #999999", marginRight: "6px" }}
              ></span>
              <span style={{ marginRight: "6px" }}>1 Review</span>
              <span
                style={{ borderLeft: "1px solid #999999", marginRight: "6px" }}
              ></span>
              <span style={{ marginRight: "6px" }}>Have a question?</span>
            </div>
          </div>

          <hr></hr>

          <div className="mrp-container">
            <span style={{ marginRight: "4px" }}>MRP</span>
            <span
              style={{ textDecorationLine: "line-through", marginRight: "4px" }}
            >
              Rs. 1,999
            </span>
            <span style={{ marginRight: "4px" }}>
              {" "}
              (Inclusive of all taxes)
            </span>
          </div>

          <div className="price">
            <span className="pdp-price">RS. 406</span>
            <span className="pdp-discount">80% &nbps OFF</span>
          </div>
          {/* color */}
          <div className="color-container">
            <div className="aval-color">color</div>
            <div className="avlcolor-img-container">
              <div>
                <img
                  src="https://n2.sdlcdn.com/imgs/k/m/y/130x152/Femvy-Peach-Georgette-Women-s-SDL886501842-1-e35cf.jpg"
                  className="avlcolor-img"
                />
                <div className="color-name">Black</div>
              </div>
              <div>
                <img
                  src="https://n3.sdlcdn.com/imgs/k/m/y/130x152/Femvy-Red-Georgette-Women-s-SDL197999714-1-7521b.jpg"
                  className="avlcolor-img"
                />
                <div className="color-name">Red</div>
              </div>
              <div>
                <img
                  src="https://n2.sdlcdn.com/imgs/k/m/y/130x152/Femvy-Peach-Georgette-Women-s-SDL886501842-1-e35cf.jpg"
                  className="avlcolor-img"
                />
                <div className="color-name">Black</div>
              </div>
              <div>
                <img
                  src="https://n3.sdlcdn.com/imgs/k/m/y/130x152/Femvy-Red-Georgette-Women-s-SDL197999714-1-7521b.jpg"
                  className="avlcolor-img"
                />
                <div className="color-name">Red</div>
              </div>
              <div>
                <img
                  src="https://n2.sdlcdn.com/imgs/k/m/y/130x152/Femvy-Peach-Georgette-Women-s-SDL886501842-1-e35cf.jpg"
                  className="avlcolor-img"
                />
                <div className="color-name">Black</div>
              </div>
              <div>
                <img
                  src="https://n3.sdlcdn.com/imgs/k/m/y/130x152/Femvy-Red-Georgette-Women-s-SDL197999714-1-7521b.jpg"
                  className="avlcolor-img"
                />
                <div className="color-name">Red</div>
              </div>
              <div>
                <img
                  src="https://n2.sdlcdn.com/imgs/k/m/y/130x152/Femvy-Peach-Georgette-Women-s-SDL886501842-1-e35cf.jpg"
                  className="avlcolor-img"
                />
                <div className="color-name">Black</div>
              </div>
            </div>
          </div>


          {/* size*/}
          <div className="size-container">
            <div>Size</div>
            <div>
                <button className="size-btn">XS</button>
                <button className="size-btn">S</button>
                <button className="size-btn">M</button>
                <button className="size-btn">L</button>
                <button className="size-btn">XL</button>
                <button className="size-btn">2XL</button>
            </div>
          </div>

          {/* btn */}
          <div className="btns">
            <button className="add-to-card">ADD TO Card</button>
            <button className="buy-now">BUY Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SnapDeal;
