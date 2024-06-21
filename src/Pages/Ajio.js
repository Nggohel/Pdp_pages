import React, { useEffect, useRef, useState } from "react";
import "../style/Ajio.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../Images/Arrow.svg";
import ajiostar from "../Images/ajiostar.svg";
import location from "../Images/location.svg";

function Ajio() {
  const [productThumbnail, setProductThumbnail] = useState([]);
  const [productImg, setProductImg] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  let sliderRef = useRef(null);
  
  useEffect(() => {
    setProductImg([
      "https://assets.ajio.com/medias/sys_master/root/20240611/L5Iv/666834a416fd2c6e6a8dbbb6/-473Wx593H-469607489-blue-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240322/BBG3/65fdab0e16fd2c6e6a793190/-473Wx593H-469607489-blue-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240322/51bO/65fd97e505ac7d77bbd24ba7/-473Wx593H-469607489-blue-MODEL3.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240322/LiPT/65fd9f6c16fd2c6e6a78ee24/-473Wx593H-469607489-blue-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240322/fwRn/65fda7ed16fd2c6e6a792002/-473Wx593H-469607489-blue-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240322/aDN6/65fd986405ac7d77bbd24f91/-473Wx593H-469607489-blue-MODEL6.jpg",
    ]);

    setProductThumbnail([
      "https://assets.ajio.com/medias/sys_master/root/20240611/L5Iv/666834a416fd2c6e6a8dbbe5/-78Wx98H-469607489-blue-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240322/BBG3/65fdab0e16fd2c6e6a793172/-78Wx98H-469607489-blue-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240322/51bO/65fd97e505ac7d77bbd24b90/-78Wx98H-469607489-blue-MODEL3.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240322/LiPT/65fd9f6c16fd2c6e6a78ee13/-78Wx98H-469607489-blue-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240322/fwRn/65fda7ed16fd2c6e6a791ff9/-78Wx98H-469607489-blue-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240322/aDN6/65fd986405ac7d77bbd24f75/-78Wx98H-469607489-blue-MODEL6.jpg",
    ]);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settingsMainImage = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    vertical: false,
    verticalSwiping: false,
    nextArrow: <NextMainImgBtn />,
    prevArrow: <PrevMainImgBtn />,
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      >
        <img
          src={Arrow}
          className="next-arrow"
          style={{ height: "16px", width: "16px" }}
        />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img src={Arrow} className="prev-arrow" />
      </div>
    );
  }

  function NextMainImgBtn(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      >
        <img
          src={Arrow}
          className="mainimg-next"
          
        />
      </div>
    );
  }
  function PrevMainImgBtn(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      >
        <img
          src={Arrow}
          className="mainimg-prev"
          
        />
      </div>
    );
  }

 

  const handleProductImg = (index) => {
    setActiveSlide(index);
    sliderRef.slickGoTo(index);
  };

  return (
    <>
      <div className="ajio-page">
        {/* carosel */}
        <div className="carousel-container">
          <Slider {...settings} className="slider-container" key="car">
            {productThumbnail.map((img, index) => (
              <div key={index}>
                <img
                  className="thumbnail-img"
                  onMouseEnter={() => handleProductImg(index)}
                  src={img}
                  alt={`Product ${index + 1}`}
                  style={{ opacity: index === activeSlide ? "0.5" : "1" }}
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* Img */}
        <div className="mainimg-container">
          {productImg ? (
            <Slider
              {...settingsMainImage}
              key="main"
              ref={(slider) => (sliderRef = slider)}
            >
              {productImg.map((img, index) => (
                <div className="main-img-div" key={index}>
                  <img className="main-img" src={img} />
                </div>
              ))}
            </Slider>
          ) : (
            "No data"
          )}
        </div>
        {/* Details */}
        <div className="details-container">
          <h1 className="brand-name">LEVIS</h1>
          <h3 className="prod-name">Women 710 Mid-Wash Slim Fit Jeans</h3>
          <div className="rating-container">
            <div className="rate">
              <p style={{ color: "#fff" }}>4</p>
              <img src={ajiostar} style={{ height: "12px", width: "12px" }} />
            </div>
            <div style={{ color: "#6D6D6D" }}>4 Ratings</div>
          </div>

          <div className="mrp">₹1,710</div>
          <div className="actul-mrp">
            <span style={{ textTransform: "uppercase", marginRight: "4px" }}>
              MPR
            </span>
            <span
              style={{ textDecorationLine: "line-through", marginRight: "4px" }}
            >
              ₹2889
            </span>
            <b style={{ textTransform: "uppercase", marginRight: "4px" }}>
              (41% Off)
            </b>
          </div>
          <div className="tax">Price inclusive of all taxes</div>

          {/* offer-block */}
          <div className="offer-block">
            <div className="promo-title-blck">
              <div className="promo-title">New500</div>
              <div className="promo-tc">T&C</div>
            </div>
            <div className="promo-des-blck">
              <div className="promo-discounted-price">
                <span>
                  Get it for <span style={{ color: "#008526" }}>₹1280</span>
                </span>
              </div>
              <div className="flat-off">
                Get Flat Rs.500 Off on 1990 and Above.
              </div>
              <div className="view-all-pd">View All Products </div>
            </div>
          </div>

          <div className="more-option">+11 More</div>
          <div className="pd-color">Blue</div>

          <div className="color-variant-block">
            <img
              className="swatch-image"
              src="https://assets.ajio.com/medias/sys_master/root/20240322/Za0G/65fdacfa16fd2c6e6a793c7d/-469607489-blue-SWATCH.jpg"
            />
          </div>

          <div className="size-selection">Select Size</div>

          <div className="location-container">
            <img src={location} className="location-logo" />
            <div className="size-delivery">
              Select your size to know your estimated delivery date.
            </div>
          </div>

          <div className="pd-btns">
            <button className="add-to-card">ADD TO BAG</button>
            <button className="save-to-wishlist">save to wishlist</button>
          </div>

          <div className="product-des-container">
            <h2 className="product-details-title">Product Details</h2>
            <h2>
              <ul className="prod-list">
                <li className="detail-list">
                  Machine wash cold - normal cycle. Wash inside out with like
                  colors, do not bleach, tumble dry low, warm iron, do not dry
                  clean, do not iron decoration
                </li>
                <li className="detail-list">Belt loops</li>
                <li className="detail-list">5-pocket styling</li>
                <li className="detail-list">5-pocket styling</li>
                <li className="detail-list">
                  80% cotton, 19% polyester, 1% elastane
                </li>
              </ul>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ajio;
