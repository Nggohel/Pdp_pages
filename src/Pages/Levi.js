import React ,{useEffect, useState} from "react";
import "../style/Levi.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../Images/Arrow.svg";
import LeviAccordian from "../utility/LeviAccordian";

export default  function Levi(){
    const [productImg, setProductImg] = useState([]);
    const [thumbnailImg, setthumbnailImg] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    
    useEffect(() => {
      setProductImg([
        "https://levi.in/cdn/shop/files/863240075_01_Front_46250745-d0aa-443e-af10-6d4634e6c11b.jpg?v=1712742939",
        "https://levi.in/cdn/shop/files/863240075_01_Style_Shot_be8fc140-8de7-4460-b940-8f04f8675ebb.jpg?v=1712742939",
        "https://levi.in/cdn/shop/files/863240075_01_Front_46250745-d0aa-443e-af10-6d4634e6c11b.jpg?v=1712742939",
        "https://levi.in/cdn/shop/files/863240075_01_Style_Shot_be8fc140-8de7-4460-b940-8f04f8675ebb.jpg?v=1712742939",
        "https://levi.in/cdn/shop/files/863240075_01_Front_46250745-d0aa-443e-af10-6d4634e6c11b.jpg?v=1712742939",
        "https://levi.in/cdn/shop/files/863240075_01_Style_Shot_be8fc140-8de7-4460-b940-8f04f8675ebb.jpg?v=1712742939",
        "https://levi.in/cdn/shop/files/863240075_01_Front_46250745-d0aa-443e-af10-6d4634e6c11b.jpg?v=1712742939",
        "https://levi.in/cdn/shop/files/863240075_01_Style_Shot_be8fc140-8de7-4460-b940-8f04f8675ebb.jpg?v=1712742939",
        "https://levi.in/cdn/shop/files/863240075_01_Front_46250745-d0aa-443e-af10-6d4634e6c11b.jpg?v=1712742939",
        "https://levi.in/cdn/shop/files/863240075_01_Style_Shot_be8fc140-8de7-4460-b940-8f04f8675ebb.jpg?v=1712742939",
      ]);

      setthumbnailImg([
        "https://levi.in/cdn/shop/files/863240075_01_Front_46250745-d0aa-443e-af10-6d4634e6c11b.jpg?v=1712742939&width=118",
        "https://levi.in/cdn/shop/files/863240075_01_Style_Shot_be8fc140-8de7-4460-b940-8f04f8675ebb.jpg?v=1712742939&width=118",
        "https://levi.in/cdn/shop/files/863240075_01_Front_46250745-d0aa-443e-af10-6d4634e6c11b.jpg?v=1712742939&width=118",
        "https://levi.in/cdn/shop/files/863240075_01_Style_Shot_be8fc140-8de7-4460-b940-8f04f8675ebb.jpg?v=1712742939&width=118",
        "https://levi.in/cdn/shop/files/863240075_01_Front_46250745-d0aa-443e-af10-6d4634e6c11b.jpg?v=1712742939&width=118",
        "https://levi.in/cdn/shop/files/863240075_01_Style_Shot_be8fc140-8de7-4460-b940-8f04f8675ebb.jpg?v=1712742939&width=118",
        "https://levi.in/cdn/shop/files/863240075_01_Front_46250745-d0aa-443e-af10-6d4634e6c11b.jpg?v=1712742939&width=118",
        "https://levi.in/cdn/shop/files/863240075_01_Style_Shot_be8fc140-8de7-4460-b940-8f04f8675ebb.jpg?v=1712742939&width=118",
        "https://levi.in/cdn/shop/files/863240075_01_Front_46250745-d0aa-443e-af10-6d4634e6c11b.jpg?v=1712742939&width=118",
        "https://levi.in/cdn/shop/files/863240075_01_Style_Shot_be8fc140-8de7-4460-b940-8f04f8675ebb.jpg?v=1712742939&width=118",
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
          <img src={Arrow} className="prev-arrow" />
        </div>
      );
    }
  
  
    const handleProductImg = (index) => {
      setActiveSlide(index);
    
    };
  
    return(
        <>
        <div className="levi-page">
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
        
        
          {activeSlide !== 0 ? (
            <div className="mainimg-container" style={{ height: "918px", width: "690px" }}>
              <img className="main-img" src={productImg[activeSlide]} />
            </div>
          ) : (
            <div className="mainimg-container" style={{ height: "918px", width: "690px" }}>
              <img className="main-img" src={productImg[0]} />
            </div>
          )}
        
        <div className="details-container">
            <h1 className="pd-name">WOMEN'S GRAPHIC PRINT NAVY CREW NECK SWEATSHIRT</h1>
            <div className="mrp-container">
                <span style={{textDecorationLine:"line-through",color:"gray", fontSize:"14px"}}>₹2,299.00</span>
                <span style={{fontSize:"16px"}}><b>₹1,299.00</b></span>
                <span className="off-on-pd">50% OFF</span>
            </div>
            <p className="tax">Inclusive of all taxes</p>
            <hr style={{margin:"10px 0px"}}></hr>
            <div className="avl-color">
                <span className="color">Color</span>
                <span className="avl-colors">Blue</span>
            </div>
            
            <div className="avl-color-div">
            <div className="avl-color-img"></div>
            </div>

            <hr style={{margin:"10px 0px"}}></hr>

            <div className="size-conatainer">
                <h3 className="size-title">Size</h3>
                <div className="all-size-btns">
                    <button className="size-btn">XS</button>
                    <button className="size-btn">S</button>
                    <button className="size-btn">M</button>
                    <button className="size-btn">L</button>
                    <button className="size-btn">XL</button>
                    <button className="size-btn">XXL</button>
                </div>
            </div>
        </div>
        </div>

        <div style={{margin:"10px 180px"}}>
            <LeviAccordian/>
        </div>
        </> 
    )
}