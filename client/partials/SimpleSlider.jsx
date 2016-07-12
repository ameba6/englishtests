import React, {Component} from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slide'
    };
    return (
      <Slider {...settings}>
        <div className=""><img src='/London-1.jpg' /></div>
        <div className=""><img src='/London-2.jpg' /></div>
        <div className=""><img src='/London-3.jpg' /></div>
      </Slider>
    );
  }
};