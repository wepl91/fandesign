import React, { Component } from 'react';

class YourPaintingView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [],
      currentStep: 0,
    };
  }

  render() {
    return(
      <div className="your-painting-view">
        <h1>Armá tu cuadro</h1>
      </div>
    )
  }
}

export default YourPaintingView;