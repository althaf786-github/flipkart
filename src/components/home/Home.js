import React, { Component } from "react";
import Slider from "./slider/Slider";
import Deals from "./deals/Deals";
import Boxs from "./box/Boxs";
import Special from './special/Special';
import Notes from '../notes/Notes';
import Footer from '../footer/Footer';


class Home extends Component {
  state = {
    bar_data: [
     
     
    ],
    special_data: [
        {
          
        },
      
    ]
  };

  render() {
    return (
      <div>
        
        <Slider />
        <div style={{ margin: "0px 0 0 10px" }}>
          <Deals />
        </div>
       
        
        {
           
        }
        <Notes />
        <Footer />
      </div>
    );
  }
}

export default Home;
