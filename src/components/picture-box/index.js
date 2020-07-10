import React from 'react';
import Background from './pino-fondo.jpg'; 

const PictureBox = ({ height = '500', width = '800', color = 'pink' }) => {
  const outerData = {
    height: `${height}px`,
    width: `${width}px`,
    paddingTop: '50px',
    paddingLeft: '50px',
    borderColor: color === 'white' ? '#C8C8C8' : color,
    borderRadius: '3px',
  };
  const innerData = {
    height: `${parseInt(height) - 100}px`,
    width: `${parseInt(width) - 100}px`,
    color: 'white',
    borderColor: color === 'white' ? '#C8C8C8' : color,
    borderRadius: '3px',
  }

  if (color === 'natural') {
    outerData.backgroundImage = `url(${Background})`;
    delete outerData.color;
  }
  
  return(
    <div 
      className="picture-box outer-box" 
      style={{ 
        height: outerData.height, 
        width: outerData.width, 
        paddingTop: outerData.paddingTop, 
        paddingLeft: outerData.paddingLeft, 
        background: color, 
        borderRadius: outerData.borderRadius,
        backgroundImage: outerData.backgroundImage,
        borderColor: outerData.borderColor}}
      >
    <div 
      className="picture-box inner-box" 
      style={{ 
        height: innerData.height, 
        width: innerData.width, 
        background: innerData.color,
        borderRadius: innerData.borderRadius, 
        borderColor: innerData.borderColor}} 
      />
  </div>);
}

export default PictureBox;