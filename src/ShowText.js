import React, { Component } from 'react';

class ShowText extends Component {

  state = {
    showText: false
  }

  toggleText = () => {
    this.setState( {showText: !this.state.showText} )
  }

  render() { 
    return ( 
      <>
        testbcvbcvbc <button type="button" onClick={() => this.toggleText()}>click</button>

        <hr />

        { this.state.showText && <span>this is text to show</span>}
      </>
     );
  }
}
 
export default ShowText;