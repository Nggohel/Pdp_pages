import React ,{useState, useEffect} from "react";
import "../style/Flipkart.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlipkartAccordian from "../utility/FlipkartAccordian";

export default function Flipkart(){

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
      arrows: true,    
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
  
    const handleProductImg = (index) => {
      setActiveSlide(index);
    
    };

    return(
        <>
        <div className="flipkart-page">
        <div className="thumbnail-container">
          <Slider {...settings} className="slider-container">
            {thumbnailImg?.map((img, index) => (
              <div key={index} >
                <img
                  className="thumbnail-img"
                  onMouseEnter={() => handleProductImg(index)}
                  src={img}
                  alt={`Product ${index + 1}`}
                  style={{ border: index === activeSlide ? "2px solid blue" : "none" }}
                />
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="mainimg-container">
          {activeSlide !== 0 ? (
            <div style={{ height: "590px", width: "440px" }}>
              <img className="main-img" src={productImg[activeSlide]} />
            </div>
          ) : (
            <div style={{ height: "590px", width: "440px" }}>
              <img className="main-img" src={productImg[0]} />
            </div>
          )}
        </div>

        <div className="details-container">
            <h3 className="brand-name">
                Shree RamKrishana Fab
            </h3>
            <p className="pd-name">Women Chikan Embroidery Georgette A-line Kurta </p>
            <p className="sp-offer">Special offer </p>
            <div className="mrp-container">
                <span className="final-mrp">₹348</span>
                <span className="actul-mrp">₹ 999</span>
                <span className="percentage-off">65% off</span>
            </div>
            <div className="review">Be the first to Review this product</div>

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

           <div>
            <img src="https://rukminim2.flixcart.com/lockin/100/100/images/CCO__PP_2019-07-14.png?q=50" style={{width:"392px", height:"92px" , objectFit:"cover"}}/>
           </div>
          <FlipkartAccordian/>

          <div className="product-desc-container">
            <h1 className="pd-des-title">Product Description</h1>
            <div className="pd-description-1">
                <div className="pd-description">
                    <div className="pd-description-title">Graceful Aesthetics</div>
                    <div>Adorned with delicate Chikan embroidery, this women’s kurta creates a graceful and traditional aesthetic, adding an elegant touch to any outfit. Chikan embroidery enhances the beauty of this kurta with its fine stitches and intricate patterns. Moreover, it adds a touch of cultural richness and heritage, making this kurta a statement piece for any occasion.</div>
                </div>
                <div className="pd-des-img">
                    <img src="https://n2.sdlcdn.com/imgs/k/m/y/Femvy-Peach-Georgette-Women-s-SDL886501842-3-a6262.jpg"
                     style={{height:"200px", width:"150px", objectFit:"contain"}}/>
                </div>
            </div>
            <div className="pd-description-1">
            <div className="pd-des-img">
                    <img src="https://n2.sdlcdn.com/imgs/k/m/y/Femvy-Peach-Georgette-Women-s-SDL886501842-3-a6262.jpg"
                     style={{height:"200px", width:"150px", objectFit:"contain"}}/>
                </div>
                <div className="pd-description">
                    <div className="pd-description-title">
                    Practical Feature</div>
                    <div>Designed for both style and functionality, this kurta features a notched neck and three-quarter sleeves, offering a classic and modest look suitable for various settings. The A-line silhouette flatters all body types, providing comfort and ease of movement. Additionally, side slits enhance breathability and mobility, while the calf length offers a balance between tradition and modernity. These practical features ensure that this kurta is fashionable as well as comfortable for all-day wear.</div>
                </div>
                
            </div>

            <h3 className="view-all">
            View all features
            </h3>
            
          </div>
        </div>
        </div>
        </>
    );
}
