import React, { Component } from 'react';
//css
import './xheader.css';
import { connect } from 'react-redux';
//html
class Xheader extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {

		}
		console.log(this)
	}
  render() {
    return (
      <div>
      	<header onClick={this.props.showActionsheet.bind(this,this)} style={{
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

export default connect((state) => {
	//他把store的state全部放到该组件的props里面
	return state
}, (dispatch) => {
	return {
		showActionsheet: (self) => {
			console.log(self);
			//可以触发多个
			dispatch({
				type: 'showActionsheet',
				isShowActionSheet: !self.props.isShowActionSheet,
			})
		}
	}
})(Xheader);