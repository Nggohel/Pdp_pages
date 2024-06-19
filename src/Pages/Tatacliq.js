import React, { useEffect, useState } from "react";
import "../style/Tatacliq.css";
import TataAccordian from "../utility/TataAccordian";
function Tatacliq() {
  const [productImg, setProductImg] = useState([]);
  const allProductImgs = [
    "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014769906_437Wx649H_202210071929521.jpeg",
    "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014769906_437Wx649H_202210071927182.jpeg",
    "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014769906_437Wx649H_202210071929521.jpeg",
    "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014769906_437Wx649H_202210071927182.jpeg",
    "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014769906_437Wx649H_202210071929521.jpeg",
  ];

  useEffect(() => {
    setProductImg(allProductImgs.slice(2));
  }, []);
  return (
    <>
      <div className="tatacliq-page">
        <div className="product-img-container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img className="large-img" src={allProductImgs[0]} />
            <img className="large-img" src={allProductImgs[0]} />
          </div>

          <div className="small-img-container">
            {productImg.map((img, index) => (
              <img
                key={index}
                className="small-img"
                src={img}
                alt="product-img"
              />
            ))}
          </div>
        </div>
        <div className="details-container">
          <h1 className="brand-title">Levi's</h1>
          <h1 className="product-name">
            Levi's Light Blue Tie-Dye Denim Jacket
          </h1>

          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="mrp">₹3420</span>{" "}
            <span className="final-mrp">
              MRP: ₹
              <span style={{ textDecorationLine: "line-through" }}>7599</span>
            </span>
            <span className="percentage-off">55% Off</span>
          </div>

          <div className="tax">Inclusive of all taxes</div>

          <div className="offer">
            Extra 10% off on cart value Rs.2499/- and more , Offer auto applied
            on cart, no code required
          </div>

          <div className="share-opinion">Share your opinion</div>

          <hr className="tatacliq-hr"></hr>
          <div className="get-offer-content">
            <div>
              <span className="offer-text">Get this for only</span>{" "}
              <span className="afteroffer-mrp">₹2920</span>
            </div>
            <div className="view-offer">View Offers</div>
          </div>
          <hr className="tatacliq-hr"></hr>

          <div className="size-container">
            <div className="size-title">
              <div className="select-size">Select Size</div>
              <div className="size-guide">Size Guide</div>
            </div>
            <div className="sizebtn-container">
              <button className="size-btn">XS</button>
              <button className="size-btn">S</button>
              <button className="size-btn">M</button>
              <button className="size-btn">L</button>
              <button className="size-btn">XL</button>
              <button className="size-btn">2XL</button>
            </div>
            <div className="modals-details">
              Model is 5'7"/170 cms and is wearing an S size
            </div>
            <div className="prod-info">
              <span>Cotton Blend</span>
              <span> , </span>
              <span>Machine wash</span>
            </div>
            <hr className="tatacliq-hr"></hr>

            <div>
              <TataAccordian />
            </div>
            <div className="prod-details-container">
              <div className="prod-details-title"> Demmoooo</div>
              <div className="prod-details-des"> Demmoooo</div>
              <div className="prod-details-title"> Demmoooo</div>
              <div className="prod-details-des"> Demmoooo</div>
              <div className="prod-details-title"> Demmoooo</div>
              <div className="prod-details-des"> Demmoooo</div>
              <div className="prod-details-title"> Demmoooo</div>
              <div className="prod-details-des"> Demmoooo</div>
              <div className="prod-details-title"> Demmoooo</div>
              <div className="prod-details-des"> Demmoooo</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tatacliq;
