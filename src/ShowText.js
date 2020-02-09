import React, { Component } from 'react';

class ShowText extends Component {

  state = {
    showText: true
  }

  toggleText = () => {
    this.setState( {showText: !this.state.showText} )
  }

  render() { 
    return ( 
      <div>
        testbcvbcvbc <button type="button" onClick={() => this.toggleText()}>click</button>

        <hr />

        { this.state.showText && <span class="text">this is text to show</span>}
      </div>
     );
  }
}
 
export default ShowText;