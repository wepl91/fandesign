import React from 'react';
import Background from './pino-fondo.jpg'; 

const PictureBox = ({ height = '300', width = '600', color = 'pink', ropeQuantity = 2 }) => {
  const outerData = {
    height: `${height}px`,
    width: `${width}px`,
    paddingTop: '40px',
    paddingLeft: '40px',
    borderColor: color === 'white' ? '#C8C8C8' : color,
    borderRadius: '3px',
  };
  const innerData = {
    height: `${parseInt(height) - 80}px`,
    width: `${parseInt(width) - 80}px`,
    color: 'white',
    borderColor: color === 'white' ? '#C8C8C8' : color,
    borderRadius: '3px',
  }

  if (color === 'natural') {
    outerData.backgroundImage = `url(${Background})`;
    outerData.borderColor = '#CCB28D';
    innerData.borderColor = '#CCB28D';
    delete outerData.color;
  }

  
  return(
    <div className="picture-box">
      <div 
        className="picture-box__outer-box" 
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
        className="picture-box__inner-box" 
        style={{ 
          height: innerData.height, 
          width: innerData.width, 
          background: innerData.color,
          borderRadius: innerData.borderRadius, 
          borderColor: innerData.borderColor}} 
        />
      </div>
    </div>)
}

export default PictureBox;