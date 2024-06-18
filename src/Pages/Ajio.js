import React, { useEffect, useState } from "react";
import CarouselComponent from "../utility/CarouselComponent";
import "../style/Ajio.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Ajio() {
  const [productThumbnail, setProductThumbnail] = useState([]);
  const [productImg, setProductImg] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
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
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <div className="ajio-page">
        {/* carosel */}
        <div className="carousel-container">
          <Slider {...settings}>
            {productThumbnail.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        {/* Img */}
        <div className="mainimg-container">
          <img
            src={productImg[activeSlide]}
            alt={`Main Product ${activeSlide + 1}`}
          />
        </div>
        {/* Details */}
        <div className="details-container"></div>
      </div>
    </>
  );
}

export default Ajio;
