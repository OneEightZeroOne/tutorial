import React, { Component } from 'react';

//css
import './xheader.css';

//html
class Xheader extends Component {
  render() {
    return (
      <div>
      	<header style={{
      		width:"100%",
      		height:"50px",
      		lineHeight:"50px",
      		textAlign:"center",
      		backgroundColor:"red",
      		color:"white"
      	}}>微信</header>
      </div>
    );
  }
}

export default Xheader;