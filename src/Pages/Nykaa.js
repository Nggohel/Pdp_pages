import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../Images/Arrow.svg";
import ajiostar from "../Images/ajiostar.svg";
import "../style/Nykaa.css";
import Accordian from "../utility/Accordian";

function Nykaa() {
  const [productThumbImg, setproductThumbImg] = useState([]);
  const [productImg, setproductImg] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3.05,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    setproductThumbImg([
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_1.jpg?rnd=20200526195200&tr=w-256",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_2.jpg?rnd=20200526195200&tr=w-256",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_1.jpg?rnd=20200526195200&tr=w-256",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_2.jpg?rnd=20200526195200&tr=w-256",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_1.jpg?rnd=20200526195200&tr=w-256",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_2.jpg?rnd=20200526195200&tr=w-256",
    ]);

    setproductImg([
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_1.jpg?rnd=20200526195200&tr=w-512",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_2.jpg?rnd=20200526195200&tr=w-512",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_1.jpg?rnd=20200526195200&tr=w-512",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_2.jpg?rnd=20200526195200&tr=w-512",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_1.jpg?rnd=20200526195200&tr=w-512",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/e/5e9f48aCSNAINAPURPLE_2.jpg?rnd=20200526195200&tr=w-512",
    ]);
  }, []);

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
        <img
          src={Arrow}
          className="prev-arrow"
          style={{ height: "16px", width: "16px" }}
        />
      </div>
    );
  }

  const handleProductImg = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      <div className="nykaa-page">
        {/* tumbnail */}
        <div className="small-img-container">
          <Slider {...settings} className="slider-container">
            {productThumbImg.map((img, index) => (
              <div key={index}>
                <img
                  className="thumbnail-img"
                  onClick={() => handleProductImg(index)}
                  src={img}
                  alt={`Product ${index + 1}`}
                  style={{
                    borderBottom:
                      index === activeSlide ? "2.5px solid" : "none",
                    paddingBottom: index === activeSlide ? "3px " : "none",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* main-img */}
        <div className="main-img-container">
          {activeSlide !== 0 ? (
            <div style={{ height: "640px", width: "480px" }}>
              <img className="main-img" src={productImg[activeSlide]} />
            </div>
          ) : (
            <img className="main-img" src={productImg[0]} />
          )}
        </div>
        {/* Details */}
        <div className="details-conatiner">
          <h2 className="prod-tag">BESTSELLER</h2>
          <h1>Stylum</h1>
          <p>Womens Floral Printed Rayon Co Ord (Set of 2)</p>

          <div className="rate-container">
            <div className="rating-content">
              <p className="rated">3.8</p>
              <img src={ajiostar} style={{ height: "20px", width: "20px" }} />
            </div>

            <div className="total-rating">Based on 1332 ratings</div>
          </div>
          {/* price -container */}
          <div className="price-container">
            <div>
              <span className="final-mrp">₹ 1,120</span>
              <span className="discount">65% Off</span>
            </div>

            <div style={{ marginTop: "0.25rem" }}>
              <span
                style={{ color: "rgba(0, 19, 37, 0.64)", fontSize: "16px" }}
              >
                <span style={{ textTransform: "uppercase" }}>MRP ₹ </span>
                <span style={{ textDecorationLine: "line-through" }}>
                  3,199
                </span>
              </span>
              <span
                style={{
                  color: "rgba(0, 19, 37, 0.64)",
                  fontSize: "14px",
                  textAlign: "center",
                  marginLeft: "5px",
                }}
              >
                Inclusive of all taxes
              </span>
            </div>
          </div>
          <hr className="nykaa-hr"></hr>

          <div className="size-container">
            <div className="size-heading">
              <h3 className="size-title">Select Size</h3>
              <button className="size-guide">Size Guide</button>
            </div>
            <div className="size-btn-container">
              <button className="size-btn">XS</button>
              <button className="size-btn">S</button>
              <button className="size-btn">M</button>
              <button className="size-btn">L</button>
              <button className="size-btn">XL</button>
              <button className="size-btn">2XL</button>
            </div>
            {/* wishlist and add-to-card conatiner */}
            <div className="action-container">
              <div className="add-to-wishlist">Add to Wishlist</div>
              <button className="add-to-bag-btn">Add to Bag</button>
            </div>

            <hr className="nykaa-lasthr"></hr>

            <div style={{ width: "100%" }}>
              <Accordian />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nykaa;
