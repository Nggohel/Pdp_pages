import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/LimeRoad.css";
import star from "../Images/star.svg";
import share from "../Images/share.svg";
import whatsup from "../Images/whatsuplogo.svg";
import heart from "../Images/heart.svg";

export default function LimeRoad() {
  const [productImg, setproductImg] = useState([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.18,
    slidesToScroll: 2,
  };

  useEffect(() => {
    setproductImg([
      "https://img3.junaroad.com/uiproducts/21082658/zoom_0-1711131874.jpg",
      "https://img3.junaroad.com/uiproducts/21082658/std_300_1-1711131874.jpg",
      "https://img3.junaroad.com/uiproducts/21082658/std_300_2-1711131874.jpg",
      "https://img3.junaroad.com/uiproducts/21082658/std_300_3-1711131874.jpg",
    ]);
  }, []);

  return (
    <>
      <div className="limeroad-container">
        {/* product img */}
        {/* <div className="productimg-container"> */}
        <Slider {...settings} className="productimg-container">
          {productImg.map((img, index) => (
            <div className="img-container" key={index}>
              <img src={img} alt={`Product ${index}`} className="product-img" />
            </div>
          ))}
        </Slider>
        {/* </div> */}
        {/* Product-details */}
        <div className="productDetails-container">
          <h1>Women Pink Mnadarin Neck A-Line Kurti</h1>
          <p className="brand-name">Brand Readiprint Fashions</p>
          <div className="rating">
            <div className="rate">5.0</div>
            <div>
              <img src={star} style={{ height: "24px", width: "24px" }} />
              <img src={star} style={{ height: "24px", width: "24px" }} />
              <img src={star} style={{ height: "24px", width: "24px" }} />
              <img src={star} style={{ height: "24px", width: "24px" }} />
              <img src={star} style={{ height: "24px", width: "24px" }} />
            </div>
          </div>
          {/* logo */}
          <div className="logo-container">
            <img src={share} style={{ width: "24px", height: "24px" }} />
            <img src={whatsup} style={{ width: "24px", height: "24px" }} />
          </div>

          {/* size */}
          <div className="size-container">
            <div>Select size</div>
            <div className="size-chart">size chart </div>
          </div>
          {/* sizes- button */}
          <div className="sizes-btn-container">
            <button className="sizes-btn">xs</button>
            <button className="sizes-btn">s</button>
            <button className="sizes-btn">m</button>
            <button className="sizes-btn">l</button>
            <button className="sizes-btn">xl</button>
            <button className="sizes-btn">2xl</button>
          </div>

          {/* Mrp and offers */}
          <div className="price-offer-container">
            {/* price-tags */}
            <div className="price-tags-container">
              <p>M.R.P.</p>
              <p>Price</p>
              <p>You Save</p>
            </div>
            {/* price */}
            <div>
              <p>
                : ₹ <span className="mrp">3200</span>
              </p>
              <p className="final-mrp">
                : ₹ <span>1249</span>
              </p>
              <p className="saved">
                : ₹ <span>1951 (61%) </span>
              </p>
            </div>
            {/* offers */}
            <div>
              <div className="offers">offer</div>
              <div className="offers-details">
                Pay Online & Get Flat 10% Off
              </div>
            </div>
          </div>

          <div className="tax">M.R.P. inclusive of all taxes</div>

          {/* add to card */}
          <div className="add-card-container">
            <div className="like-logo" style={{}}>
              <img src={heart} style={{ width: "24px", height: "24px" }} />
            </div>
            <div className="add-to-card">ADD To Card</div>
          </div>

          {/* size-chart */}
          <div className="sizechart-details-container">
            <div className="sizechart-title-container">
              <div className="sizechart-details-title">size chart</div>
              <div className="size-parameters">
                <div className="centimeter">centimeter</div>
                <div className="inch">inch</div>
              </div>
            </div>

            <div
              style={{
                paddingRight: "30px",
              }}
            >
              <table>
                <tr>
                  <th className="standard-sizes">STANDARD SIZE</th>
                  <td className="standard-sizes">s</td>
                  <td className="standard-sizes">m</td>
                  <td className="standard-sizes">l</td>
                  <td className="standard-sizes">xl</td>
                  <td className="standard-sizes">2xl</td>
                  <td className="standard-sizes">3xl</td>
                  <td className="standard-sizes">4xl</td>
                  <td className="standard-sizes">5xl</td>
                  <td className="standard-sizes">6xl</td>
                </tr>
                <tr>
                  <th className="brand-sizes-title brand-sizes">brand size</th>
                  <td className="brand-sizes">s</td>
                  <td className="brand-sizes">m</td>
                  <td className="brand-sizes">l</td>
                  <td className="brand-sizes">xl</td>
                  <td className="brand-sizes">2xl</td>
                  <td className="brand-sizes">3xl</td>
                  <td className="brand-sizes">4xl</td>
                  <td className="brand-sizes">5xl</td>
                  <td className="brand-sizes">6xl</td>
                </tr>
                <tr>
                  <th className="bust-size-title bust-size">bust size</th>
                  <td className="bust-size">36</td>
                  <td className="bust-size">38</td>
                  <td className="bust-size">40</td>
                  <td className="bust-size">42</td>
                  <td className="bust-size">44</td>
                  <td className="bust-size">46</td>
                  <td className="bust-size">48</td>
                  <td className="bust-size">50</td>
                  <td className="bust-size">52</td>
                </tr>
              </table>
            </div>

            <div className="tax note">
              Sizechart provided is as per the garment measurement and not the
              body
            </div>
          </div>

          {/* Delivery & return */}
          <div className="delivery-return">DELIVERY & RETURN</div>
          <div className="delivery-details">
            Expected delivery in 3 to 6 days
          </div>

          {/* Description details */}
          <div>
            <div className="description-title">Description</div>

            <div style={{ paddingBottom: "8px" }}>
              <span style={{ color: "#999" }}>occasion :</span> casual wear
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <span style={{ color: "#999" }}>color :</span> pink
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <span style={{ color: "#999" }}>work :</span> mirror work
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <span style={{ color: "#999" }}>prints and patterns:</span> solid
              with work
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <span style={{ color: "#999" }}>type :</span>a-line
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <span style={{ color: "#999" }}>neck type :</span> mandarin collar
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <span style={{ color: "#999" }}>lowest priced :</span>yes
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
