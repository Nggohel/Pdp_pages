import React, { useEffect, useState } from "react";
import star from "../Images/star.svg";
import hollowstar from "../Images/hollowstar.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Snapdeal.css";
import Arrow from "../Images/Arrow.svg";

function SnapDeal() {
  const [productImg, setProductImg] = useState([]);
  const [thumbnailImg, setthumbnailImg] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  let Img = [
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


  const handleProductImg = (index) => {
    setActiveSlide(index);
  
  };

  return (
    <>
      <div className="snapdeal-page">
        
        <div className="thumbnail-container">
          <Slider {...settings} className="slider-container">
            {thumbnailImg?.map((img, index) => (
              <div key={index} >
                <img
                  className="thumbnail-img"
                  onMouseEnter={() => handleProductImg(index)}
                  src={img}
                  alt={`Product ${index + 1}`}
                  style={{ border: index === activeSlide ? "1px solid" : "none" }}
                />
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="mainimg-container">
          {activeSlide !== 0 ? (
            <div style={{ height: "540px", width: "430px" }}>
              <img className="main-img" src={productImg[activeSlide]} />
            </div>
          ) : (
            <div style={{ height: "540px", width: "430px" }}>
              <img className="main-img" src={productImg[0]} />
            </div>
          )}
        </div>
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
            <span className="pdp-discount">80%  OFF</span>
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
            <div className="size-title">Size</div>
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

      <div className="product-detail">
       <div className="tabs">
        <ul className="tab-ul">
          <li className="desc-tab tab activeTab active tab-li">Item Details</li>
          <li className="desc-tab tab activeTab tab-li">Ratings & Reviews</li>
          <li className="desc-tab tab activeTab tab-li">Questions & Answers</li>
        </ul>
       </div>
       <div className="pd-detail-title">High lights</div>
       <hr className="pd-hr"></hr>
       <div className="pd-detail-data">
        <ul className="dtls-list clear">
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
        </ul>
        <ul className="dtls-list clear">
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
        </ul>
        <ul className="dtls-list clear">
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
         <li className="dtl-list">Wash Care:Machine Wash</li>
        </ul>
       </div>
      </div>
    </>
  );
}

export default SnapDeal;
