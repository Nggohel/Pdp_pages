import React ,{useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../Images/Arrow.svg";
import meeshoStar from "../Images/meeshoStar.svg";
import trusted from "../Images/trusted.svg";
import "../style/Meesho.css"

export default  function Meesho(){

    const [productImg, setProductImg] = useState([]);
    const [thumbnailImg, setthumbnailImg] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      arrows: true,
    };
    
    useEffect(() => {
      setProductImg([
        "https://images.meesho.com/images/products/367252454/xrmkg_512.webp",
        "https://images.meesho.com/images/products/367252454/ezovo_512.webp",
        "https://images.meesho.com/images/products/367252454/xrmkg_512.webp",
        "https://images.meesho.com/images/products/367252454/ezovo_512.webp",
        "https://images.meesho.com/images/products/367252454/xrmkg_512.webp",
        "https://images.meesho.com/images/products/367252454/ezovo_512.webp",
        "https://images.meesho.com/images/products/367252454/xrmkg_512.webp",
        "https://images.meesho.com/images/products/367252454/ezovo_512.webp",
        "https://images.meesho.com/images/products/367252454/xrmkg_512.webp",
        "https://images.meesho.com/images/products/367252454/ezovo_512.webp",
      ]);
      setthumbnailImg([
        "https://images.meesho.com/images/products/367252454/xrmkg_64.webp",
        "https://images.meesho.com/images/products/367252454/ezovo_64.webp",
      ]);
    }, []);
  
  
    const handleProductImg = (index) => {
      setActiveSlide(index);
    
    };
  
    return(
        <>
        <div className="meesho-page">
        <div className="thumbnail-container">
          <Slider {...settings} className="slider-container">
            {thumbnailImg?.map((img, index) => (
              <div key={index} style={{ height:"60px",width:"56px"}}>
                <img
                  className="thumbnail-img"
                  onMouseEnter={() => handleProductImg(index)}
                  src={img}
                  alt={`Product ${index + 1}`}
                  style={{ border: index === activeSlide ? "1px solid rgb(159, 32, 137)" : "none" }}
                />
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="mainimg-container">
          {activeSlide !== 0 ? (
            <div style={{ height: "472px", width: "440px" }}>
              <img className="main-img" src={productImg[activeSlide]} />
            </div>
          ) : (
            <div style={{ height: "472px", width: "440px" }}>
              <img className="main-img" src={productImg[0]} />
            </div>
          )}
        </div>

        <div className="details-container">
          <div className="container-one">
            <h1 className="pd-name">Designer dress</h1>
            <div className="mrp">₹355</div>
            <div className="rating-container">
              <span className="allover-rating">
                <span className="avg-rating">4.0</span>
                 <img src={meeshoStar} style={{height:"14px", width:"14px"}}/>
              </span>
              <span className="total-rating">11359 Ratings, 3117 Reviews</span>
              
            </div>

            <div className="delivery">Free Delivery</div>
            
          </div>

          <div className="size-container">
            <h6 className="slct-size">Select Size</h6>
            <div className="size-btns">
                <button className="size-btn">XS</button>
                <button className="size-btn">S</button>
                <button className="size-btn">M</button>
                <button className="size-btn">L</button>
                <button className="size-btn">XL</button>
                <button className="size-btn">XXL</button>
                <button className="size-btn">XXXL</button>
            </div>

          </div>
          <div className="pd-container">
            <h2 className="pd-title">Product Details</h2>
            <div className="pd-description">
            <div className="pd-details">Name : Designer dress</div>
            <div className="pd-details">Fabric : Viscose</div>
            <div className="pd-details">Sleeve Length : Short Sleeves</div>
            <div className="pd-details">Pattern : Printed</div>
            <div className="pd-details">Net Quantity (N) : 1</div>
            <div className="pd-details">Sizes :</div>
            <div className="pd-details">XS (Bust Size : 34 in)</div>
            <div className="pd-details">S (Bust Size : 36 in)</div>
            <div className="pd-details">M (Bust Size : 38 in)</div>
            <div className="pd-details">L (Bust Size : 40 in)</div>
            <div className="pd-details">XL (Bust Size : 42 in)</div>
            <div className="pd-details">XXL (Bust Size : 44 in)</div>
            <div className="pd-details">XXXL (Bust Size : 46 in)</div>

            <div className="pd-details pd-des">It makes a great addition to your wardrobe for Casual || Party wear || Beach Wear || evening wear || ceremony wear || and festive wear this evergreen design also this Dress makes it a Wonderful gifting package for any occasion.Country of Origin : India</div>
            </div>
          </div>
          <div className="soldby-container">
            <h6 className="soldby-title">Sold By</h6>
            <div className="soldby-details">
             <div className="merchant-details">
             <div className="logo">
              <img src="https://images.meesho.com/images/pow/shop_profile_100.webp" height={72} width={72}/>
              <img className="trusted-logo" src={trusted} style={{height:"20px" , width:"55px"}} />
             </div>
             <div className="merchant-name">DMPRSN ATTIRE</div>
             <button className="view-shop-btn">View Shop</button>
             </div>


            <div className="merchant-rating">
              <div className="merchnat-ratings">
              <div className="over-all-rating">
              <span className="merchnat-avg-rating">4.0</span>
              <img src={meeshoStar} style={{height:"14px", width:"14px"}}/></div>
              <div className="merchnat-rating-details">
              56,660 Ratings
              </div>
              </div>
              
              <div className="merchnat-followers">
              <div>1,728</div>
              <div className="merchnat-rating-details">
              Followers
              </div>
              </div>
              <div className="merchnat-pds">
              <div>17</div>
              <div className="merchnat-rating-details">
              Products
              </div>
              </div>
            </div>
            </div>
            
          </div>
        </div>
        </div>
        </>
    )
}