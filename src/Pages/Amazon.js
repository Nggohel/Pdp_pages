import React, { useEffect, useState } from "react";
import "../style/Amazon.css";
import halfstar from "../Images/halfstar.svg";
import star from "../Images/star.svg";

// https://www.limeroad.com/pink-pure-silk-readiprint-fashions-p21082658?imgIdx=3&reference_story_id=664db0adb388b00838f0cec4

function Amazon() {
  const [productThumbnail, setProductThumbnail] = useState([]);
  const [productImg, setProductImg] = useState([]);
  const [currentImg, setCurrentImg] = useState(productImg[0]);
  useEffect(() => {
    setProductThumbnail([
      "https://m.media-amazon.com/images/I/411iv99Xv1L._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/51uxHrPgzFL._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/51x8TSJjWnL._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/51EdPHyBNvL._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/51BsvZx+KVL._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/51490vlk-sL._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/614VQ06jKhL.SX38_SY50_CR,0,0,38,50_PKmb-play-button-overlay-thumb_.jpg",
    ]);
    setProductImg([
      "https://m.media-amazon.com/images/I/71FnJpw5J2L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81yuKd2gUsL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81zeY8lh1iL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81zeY8lh1iL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71lXqz-mCTL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/817mEHMANFL._SY741_.jpg",
    ]);
  }, []);

  const handleProductImg = (index) => {
    setCurrentImg(productImg[index]);
  };
  return (
    <>
      <div className="Amazon-page">
        {/* small-img */}
        <div className="thumbnail-container">
          {productThumbnail.map((item, index) => (
            <div
              className="small-img"
              onClick={() => handleProductImg(index)}
              onMouseEnter={() => handleProductImg(index)}
            >
              {/* <div className="small-img-container"> */}

              <img className="products-img" src={item} />

              {/* </div> */}
            </div>
          ))}
        </div>
        {/* main-img */}
        <div className="main-img-container">
          <div className="">
            {currentImg ? (
              <img className="main-img " src={currentImg} />
            ) : (
              <img
                className="main-img "
                style={{ background: "#fff" }}
                src="https://as1.ftcdn.net/v2/jpg/07/48/61/48/1000_F_748614846_odYf50Eo0Zjx9D0SXOBnD0lwg0zSjLhQ.jpg"
              />
            )}
          </div>
        </div>
        {/* Details */}
        <div className="details-conatainer">
          <p className="brand-name">Brand: Leriya Fashion</p>
          <h1 className="product-title">
            Leriya Fashion Midi Dress For Women|
            <div>One Piece Midi Dress For Women|</div>
            <div>Beach Midi Dress For Women</div>
          </h1>

          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <div> */}
            <div className="rating">3.5</div>

            <img src={star} style={{ height: "15px", width: "15px" }} />
            <img src={star} style={{ height: "15px", width: "15px" }} />
            <img src={star} style={{ height: "15px", width: "15px" }} />
            <img src={star} style={{ height: "15px", width: "15px" }} />
            <img src={halfstar} style={{ height: "15px", width: "15px" }} />

            {/* </div> */}
            <div className="rating-data">
              <div className="brand-name">247 rating</div>
              <div style={{ margin: "0" }}>|</div>
              <div className="brand-name">Search this page</div>
            </div>
          </div>
          <div>
            <span className="bought-data">300+ bought in past month</span>
          </div>
          <hr></hr>
          {/*  */}
          <div className="price-emi-container">
            <button className="deal-btn">Limited time deal</button>
            <div>
              <span className="percentage-off">-76%</span>
              <span style={{ position: "relative" }}>
                <span className="price-symbol">₹</span>
                <span className="final-price">489</span>
              </span>
            </div>
            <div>
              <span className="mrp">M.R.P.: </span>
              <span className="mrp-price">₹1,999</span>
            </div>
            <div>
              <span className="tax">Inclusive of all taxes</span>
            </div>
            <div>
              <span className="emi">
                <b>EMI</b> starts at ₹170 per month.
              </span>
              <span className="brand-name">
                EMI options
                <i className="icon"></i>
              </span>
            </div>
          </div>
          <hr></hr>
          {/* card body */}

          <div>
            <div className="card-content">
              <div style={{ display: "flex" }}>
                <div className="offer-icon">
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I_CEPC/VSX/vsx_sprite_2x.png"
                    className="offer-icon-img"
                  />
                </div>
                <div className="offer-title">Offer</div>
              </div>

              {/* cards */}
              <div className="card-container">
                <div className="card">
                  <div>
                    <h4 className="offer-item-title">Bank Offer</h4>
                    <p className="offer-item-details">
                      Upto ₹48.90 discount on AU Bank Credit Cards
                    </p>
                  </div>
                  <div>
                    <spna className="brand-name"> 1 offer </spna>
                  </div>
                </div>
                <div className="card">
                  <div>
                    <h4 className="offer-item-title">Bank Offer</h4>
                    <p className="offer-item-details">
                      Upto ₹48.90 discount on AU Bank Credit Cards
                    </p>
                  </div>
                  <div>
                    <spna className="brand-name"> 1 offer </spna>
                  </div>
                </div>
              </div>
            </div>

            <hr></hr>
            {/* carousel */}

            <div style={{ height: "76px", position: "relative" }}>
              <ol>
                <li style={{ width: "85px" }}>
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                    style={{ height: "35px", width: "35px" }}
                  />
                  <div className="carousel-details">
                    <p>10 days Return </p>
                    <p> & Exchange </p>
                  </div>
                </li>
                <li style={{ width: "85px" }}>
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                    style={{ height: "35px", width: "35px" }}
                  />
                  <div className="carousel-details">
                    {" "}
                    <p>Pay on Delivery </p>
                  </div>
                </li>
                <li style={{ width: "85px" }}>
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                    style={{ height: "35px", width: "35px" }}
                  />
                  <div className="carousel-details">
                    {" "}
                    <span>Free Delivery</span>
                  </div>
                </li>
                <li style={{ width: "85px" }}>
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                    style={{ height: "35px", width: "35px" }}
                  />
                  <div className="carousel-details">
                    {" "}
                    <span>Top Brand</span>
                  </div>
                </li>

                <li style={{ width: "85px" }}>
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                    style={{ height: "35px", width: "35px" }}
                  />
                  <div className="carousel-details">
                    {" "}
                    <p> Amazon</p>
                    <p>Delivered </p>
                  </div>
                </li>
              </ol>
              <div className="arrow-cotainer">
                <i className="carousel-icon"></i>
              </div>
            </div>

            <hr></hr>

            {/* size */}
            <div className="size-container">
              <div>
                <h4>Size:</h4>
                <select style={{ width: "10%" }}>
                  <option value="someOption">2XL</option>
                  <option value="otherOption">XL</option>
                  <option value="otherOption">L</option>
                  <option value="otherOption">M</option>
                  <option value="otherOption">S</option>
                  <option value="otherOption">XS</option>
                </select>
              </div>
              <div>
                <span>
                  <b>Colour:</b>
                </span>
                <span>Sky Blue</span>
              </div>
              <div style={{ display: "flex" }}>
                <div className="small-img">
                  <img
                    className="products-img"
                    src="https://m.media-amazon.com/images/I/411iv99Xv1L._SX38_SY50_CR,0,0,38,50_.jpg"
                  />
                </div>
                <div className="small-img">
                  <img
                    className="products-img"
                    src="https://m.media-amazon.com/images/I/411iv99Xv1L._SX38_SY50_CR,0,0,38,50_.jpg"
                  />
                </div>
                <div className="small-img">
                  <img
                    className="products-img"
                    src="https://m.media-amazon.com/images/I/411iv99Xv1L._SX38_SY50_CR,0,0,38,50_.jpg"
                  />
                </div>
              </div>
            </div>
            {/* Products Details */}
            <div>
              <h3 className="product-details-title">Product details</h3>
              <div
                style={{
                  display: "flex",
                  gap: "18px",
                  paddingBottom: "20px",
                }}
              >
                <div>
                  <p className="product-contain-type">
                    <b>Material type</b>
                  </p>
                  <p className="product-contain-type">
                    <b>Material type</b>
                  </p>
                  <p className="product-contain-type">
                    <b>Material type</b>
                  </p>
                  <p className="product-contain-type">
                    <b>Material type</b>
                  </p>
                  <p className="product-contain-type">
                    <b>Material type</b>
                  </p>
                  <p className="product-contain-type">
                    <b>Material type</b>
                  </p>
                </div>
                <div>
                  <p className="product-contain">Material type</p>
                  <p className="product-contain">Material type</p>
                  <p className="product-contain">Material type</p>
                  <p className="product-contain">Material type</p>
                  <p className="product-contain">Material type</p>
                  <p className="product-contain">Material type</p>
                </div>
              </div>
              <hr></hr>
            </div>

            {/* About item */}
            <div className="about-container">
              <h3 className="about-title">About this item</h3>
              <ul>
                <li>
                  Soft rayon blend: this one-piece dress for women is made of a
                  soft rayon blend material, featuring with floral printed beach
                  dress for women
                </li>
                <li>
                  Soft rayon blend: this one-piece dress for women is made of a
                  soft rayon blend material, featuring with floral printed beach
                  dress for women
                </li>
                <li>
                  Soft rayon blend: this one-piece dress for women is made of a
                  soft rayon blend material, featuring with floral printed beach
                  dress for women
                </li>
                <li>
                  Soft rayon blend: this one-piece dress for women is made of a
                  soft rayon blend material, featuring with floral printed beach
                  dress for women
                </li>
              </ul>
            </div>

            <hr></hr>
            {/* Additional item */}
            <div className="additional-container">
              <h3 className="additional-title">Additional Information</h3>
              <div className="additional-content">
                <div>Manufacturer</div>
                <div>
                  Leriya Fashion, Leriya Fashion, OSLC House, Kosad Ring Road,
                  394107, Surat, Gujarat, help.oslc@gmail.com
                </div>
                <div>Manufacturer</div>
                <div>
                  Leriya Fashion, Leriya Fashion, OSLC House, Kosad Ring Road,
                  394107, Surat, Gujarat, help.oslc@gmail.com
                </div>
                <div>Manufacturer</div>
                <div>
                  Leriya Fashion, Leriya Fashion, OSLC House, Kosad Ring Road,
                  394107, Surat, Gujarat, help.oslc@gmail.com
                </div>
                <div>Manufacturer</div>
                <div>
                  Leriya Fashion, Leriya Fashion, OSLC House, Kosad Ring Road,
                  394107, Surat, Gujarat, help.oslc@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* price */}
        <div className="price-container">
          <div style={{ marginBottom: "15px" }}>
            <span className="price-symbol1">₹</span>
            <span className="finalprice">489</span>
            <span className="price-icon">00</span>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <span>
              <span className="brand-name">FREE delivery </span>
              <b>Tuesday,18 June</b>on orders dispatched by Amazon over ₹499.
              <span className="brand-name">Details</span>
            </span>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <span>
              Or fastest delivery <b>Tomorrow, 17 June</b>. Order within{" "}
              <span className="time">7 hrs 32 mins.</span>{" "}
              <span className="brand-name">Details</span>
            </span>
          </div>
          <div className="loaction-container">
            <p className="location-logo" style={{ height: "40px" }}></p>
            <div className="location-details">
              Delivering to Bengaluru 560067 - Update location
            </div>
          </div>
          <div className="in-stock">In stock</div>
          <div className="ship-sold-container">
            <div className="ship-sold">Ships from</div>
            <div style={{ fontSize: "12px" }}>Amazon</div>
            <div className="ship-sold">Sold by</div>
            <div style={{ fontSize: "12px" }}>Cocoblu Retail</div>
          </div>
          {/* qty */}
          <div
            style={{
              display: "flex",
              alignItems: "end",
              gap: "5px",
              marginTop: "15px",
            }}
          >
            <div>
              <label className="qty-label">Quantity:</label>
            </div>
            <select style={{ width: "15%" }}>
              <option style={{ padding: "5px" }} value="someOption">
                1
              </option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <button className="add-card-btn">Add to Cart</button>
          <button className="buynow-btn">Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default Amazon;

// https://www.amazon.in/Leriya-Fashion-Dress-Women-XX-Large/dp/B0CT3GF1B5/ref=sr_1_7?crid=1CWVC2QLAU2W3&dib=eyJ2IjoiMSJ9.epnrHw4sOFOnq_YYHhXcSz713TA6rjukWYRCtV2bHl5RPaHSA2OTDXO1qsVj-kB_-W-RRUipfQ6K5L104ymJ-yAEWnCXjOepi6EC2byRfweSmaRk00Ip0YeJ6Z2az6n0vALcz5_h9t3x7IGbgT7G8xeHsJpPznUlufmTIwcC1vKHWbBi9OiLFPxi5ijk3tVOdxOxeVUDEqWGlFxB1NrxmbTmuwOFR98tbI2i_bdZKg0bJFwR2AX2iFeQJSOxQaTjKi0-0_fi16NReiF0izucRpXNBBnwoAYQicMsJgP9kx8.wuzjOa7IkcLYIf2AnlKD6I-4Nzq_gihk68DICPX23vY&dib_tag=se&keywords=dresses+for+women&qid=1718351648&sprefix=dress%2Caps%2C264&sr=8-7
