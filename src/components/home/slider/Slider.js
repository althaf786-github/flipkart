import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";
import "./Slider.css";

class Slider extends Component {
  render() {
    let data = [
      {
        imgSrc:
          "https://rukminim1.flixcart.com/flap/750/334/image/e988007225ebe5e9.jpg?q=90",
      },
      {
        imgSrc:
          "https://rukminim1.flixcart.com/flap/1688/280/image/90cdb794821102c8.jpg?q=50",
      },
     
     
    ];
    let data1 = [
      {
        imgSrc:
          "https://rukminim1.flixcart.com/flap/750/334/image/98b694e75a6b77f3.jpg?q=90",
      },
      
    ];
    let manner = {
      autoSliding: { interval: "4s" },
      circular: true,
    };

    let accEleSetting = { dots: false };

    let buttonSetting = {
      placeOn: "middle-inside",
      style: {
        left: {
          height: "100px",
          width: "60px",
          color: "black",
          margin: "0",
          fontSize: "30px",
          background: "white",
          opacity: "1",
        },
        right: {
          height: "100px",
          width: "60px",
          color: "balck",
          margin: "0",
          fontSize: "30px",
          background: "white",
          opacity: "1",
        },
      },
    };
    let buttonSetting1 = {
      placeOn: "middle-inside",
      style: {
        left: {
          height: "60px",
          width: "30px",
          color: "black",
          fontSize: "30px",
          background: "white",
          opacity: "1",
        },
        right: {
          height: "60px",
          width: "30px",
          color: "balck",
          fontSize: "30px",
          background: "white",
          opacity: "1",
        },
      },
    };

    return (
      <div className="offers_container">
        <div className="offer_slider">
          <CarouselSlider
            slideItems={data}
            manner={manner}
            accEle={accEleSetting}
            buttonSetting={buttonSetting}
            sliderBoxStyle={{
              width: "98.6%",
              height: "390px",
              background: "transparent",
              margin: "0 0 0 10px",
            }}
            itemsStyle={{ padding: "0px", margin: "40px 0px 0px 0px" }}
          />
        </div>
        <div className="offer_box">
          
        </div>
      </div>
    );
  }
}

export default Slider;
