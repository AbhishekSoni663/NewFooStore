import "../RestReview/RevA.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import React, { useRef, useState } from "react";
import "swiper/css";
import { Rating } from "@mui/material";
import ImageA from "../assets/Revewimg/img1.jpg";
import ImageB from "../assets/Revewimg/img2.jpg";
import ImageC from "../assets/Revewimg/img3.jpg";
import ImageD from "../assets/Revewimg/img4.jpg";
import ImageE from "../assets/Revewimg/img5.jpg";
import ImageF from "../assets/Revewimg/img6.jpg";
import ImageG from "../assets/Revewimg/img7.jpg";
import ImageH from "../assets/Revewimg/img8.jpg";

const ReviewA = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="review-section">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide1">
            <span className="slide1-img">
              <img src={ImageA} />
            </span>
            <div className="slide1-text">
              <span className="slide1-h1">
                <h3>
                  The most amazing food ever! And also the staff is so nice to
                  everyone. I highly recommend buying food from here. The best
                  pizza ever.
                </h3>
              </span>
              <Rating
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                size="medium-large"
                defaultValue={4.2}
              ></Rating>
              <span className="slide1-p">
                <p>Cierra W</p>
                <h2>Thank You</h2>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1">
            <span className="slide1-img">
              <img src={ImageB} />
            </span>
            <div className="slide1-text">
              <span className="slide1-h1">
                <h3>
                  We like to go to The Fairway every time we come to the Cape.
                  The food is always delicious! This is the first year we could
                  make reservations (probably due to spacing because of the
                  virus). Our waitress, Casey, was great!
                </h3>
              </span>
              <Rating
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                size="medium-large"
                defaultValue={4.0}
              ></Rating>
              <span className="slide-p">
                <p>Rick H.</p>
                <h2 style={{ fontSize: "15px" }}>Thank You</h2>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1">
            <span className="slide1-img">
              <img src={ImageC} />
            </span>
            <div className="slide1-text">
              <span className="slide1-h1">
                <h3>
                  The food is excellent, generous portions and great prices. The
                  service was fast and friendly. I highly recommended it if
                  you’re in the Wellfleet area.
                </h3>
              </span>
              <Rating
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                size="medium-large"
                defaultValue={4.5}
              ></Rating>
              <span className="slide1-p">
                <p>David M</p>
                <h2>Thank You</h2>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1">
            <span className="slide1-img">
              <img src={ImageD} />
            </span>
            <div className="slide1-text">
              <span className="slide1-h1">
                <h3>
                  ABSOLUTELY THE VERY BEST RESTAURANT FOR BREAKFAST, LUNCH &
                  DINNER!!!! WE LOVE THIS RESTAURANT!
                </h3>
              </span>
              <Rating
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                size="medium-large"
                defaultValue={4.3}
              ></Rating>
              <span className="slide1-p">
                <p>Ronnie E.</p>
                <h2>Thank You</h2>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1">
            <span className="slide1-img">
              <img src={ImageE} />
            </span>
            <div className="slide1-text">
              <span className="slide1-h1">
                <h3>
                  I had breakfast there this morning and dinner tonight. All
                  were well beyond my expectations. Everything is so fresh. Best
                  clam chowder I have ever had. Clams and linguine were out of
                  this world. Breakfast will knock your slippers off.
                </h3>
              </span>
              <Rating
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                size="medium-large"
                defaultValue={3.9}
              ></Rating>
              <span className="slide1-p">
                <p>James T</p>
                <h2>Thank You</h2>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1">
            <span className="slide1-img">
              <img src={ImageF} />
            </span>
            <div className="slide1-text">
              <span className="slide1-h1">
                <h3>
                  “Great selection! My go to favorite is the Cape Cod Ruben. We
                  also love their pizza. I just had the mushroom risotto with
                  scallops and loved it!”
                </h3>
              </span>
              <Rating
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                size="medium-large"
                defaultValue={4.8}
              ></Rating>
              <span className="slide1-p">
                <p>Deborah</p>
                <h2>Thank You</h2>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1">
            <span className="slide1-img">
              <img src={ImageG} />
            </span>
            <div className="slide1-text">
              <span className="slide1-h1">
                <h3>
                  “Coffee was fresh, the corned beef hash is amazing and
                  homemade, even the toast was good! Oh, and the potato
                  pancakes! Everything we ordered was fresh and delicious.
                  Highly recommend! Definitely coming back.”
                </h3>
              </span>
              <Rating
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                size="medium-large"
                defaultValue={4.9}
              ></Rating>
              <span className="slide1-p">
                <p>Stacy F</p>
                <h2>Thank You</h2>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1">
            <span className="slide1-img">
              <img src={ImageH} />
            </span>
            <div className="slide1-text">
              <span className="slide1-h1">
                <h3>
                  The most amazing food ever! And also the staff is so nice to
                  everyone. I highly recommend buying food from here. The best
                  pizza ever.
                </h3>
              </span>
              <Rating
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                size="medium-large"
                defaultValue={2}
              ></Rating>
              <span className="slide1-p">
                <p>Cierra W</p>
                <h2>Thank You</h2>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1">
            <span className="slide1-img">
              <img src={ImageA} />
            </span>
            <div className="slide1-text">
              <span className="slide1-h1">
                <h3>
                  The most amazing food ever! And also the staff is so nice to
                  everyone. I highly recommend buying food from here. The best
                  pizza ever.
                </h3>
              </span>
              <Rating
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                size="medium-large"
                defaultValue={2}
              ></Rating>
              <span className="slide1-p">
                <p>Cierra W</p>
                <h2>Thank You</h2>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" color="black" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default ReviewA;
