import React from "react";
import ImageSlider from "../../features/Slider/ImageSlider";
import Vision from "./vision/Vision";
import "animate.css";
import SliderStore from "../../features/Slider/SliderStore";
import { useEffect } from "react";
import WOW from "wowjs";
import { BackTop } from "antd";
import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./Home.css";
import Goals from "./goals/Goals";
import Programs from "./programs/Programs";
import Copartner from "./Copartners/Copartners";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div>
      <div className="home-first-section">
        <ImageSlider />
        <div className="about-us wow animate__bounceInUp">
          <div className="about-us-wrapper">
            <h1>{t("littleBitAbout")}</h1>
            <div className="home-about-us-content">
              {t("littleBitAboutInfo")}
            </div>
            <Link to="/AboutUs">
              <Button
                className="about-us-home-btn"
                size="large"
                shape="round"
                style={{
                  margin: "auto",
                  background: "white",
                  borderColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                {t("readMore")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="buffer-div">
        <div className="arrow-icon-container">
          <i
            class="fas fa-arrow-down"
            style={{ fontSize: "50px", color: "white" }}
          ></i>
        </div>
      </div>

      <Programs />

      <div className="vision-goals-wrapper">
        <div className="vision-goals-container">
          <div className="vision">
            <Vision />
          </div>

          <div className="goals">
            <Goals />
          </div>
        </div>
      </div>

      <div
        className="programs-wrapper"
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      ></div>
      <Copartner />

      <BackTop>
        <div className="up-arrow">
          <ArrowUpOutlined style={{ fontSize: "24px", color: "white" }} />
        </div>
      </BackTop>
    </div>
  );
};

export default Home;
