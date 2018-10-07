
import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";


import PropTypes from 'prop-types';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";


function Slider(props) {
  const { classes } = props;
  return (
    <Carousel showArrows={false} showThumbs={false} >
    <div>
        <img src="https://d3spxwpngnho1k.cloudfront.net/wp-content/uploads/Preston-Hire-Racing-2018-Livery-Front-1066x577.jpg" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="https://d3spxwpngnho1k.cloudfront.net/wp-content/uploads/Preston-Hire-Racing-2018-Livery-Front-1066x577.jpg" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="https://d3spxwpngnho1k.cloudfront.net/wp-content/uploads/Preston-Hire-Racing-2018-Livery-Front-1066x577.jpg" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src="https://d3spxwpngnho1k.cloudfront.net/wp-content/uploads/Preston-Hire-Racing-2018-Livery-Front-1066x577.jpg" />
        <p className="legend">Legend 4</p>
    </div>
    <div>
        <img src="https://d3spxwpngnho1k.cloudfront.net/wp-content/uploads/Preston-Hire-Racing-2018-Livery-Front-1066x577.jpg" />
        <p className="legend">Legend 5</p>
    </div>
    <div>
        <img src="https://d3spxwpngnho1k.cloudfront.net/wp-content/uploads/Preston-Hire-Racing-2018-Livery-Front-1066x577.jpg" />
        <p className="legend">Legend 6</p>
    </div>
</Carousel>
  );
}

Slider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (Slider);


