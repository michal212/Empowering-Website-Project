import React from "react";
import { Carousel } from "antd";
import ImgSliderData from "./imgSliderData";
import "antd/dist/antd.css";
import "../Slider/slider.css";

const ImageSlider = () => {
  return (
    <div className="slider-img-section" style={{ paddingTop: "20px" }}>
      <div className="slider-container">
        <div className="container-frame-cube"></div>
        <Carousel autoplay>
          {ImgSliderData.map((slide) => (
            <div>
              <img
                src="https://images.pexels.com/photos/1010079/pexels-photo-1010079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                id="img-slide"
              />
            </div>
