import React, {
	Component
} from 'react';
//css
import './xheader.css';
import { connect } from 'react-redux';

import emitter from '../../util/events';
//html
class Xheader extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			title:"微信"
		}
		console.log(emitter)
	}
	render() {
		return(
			<div>
      	<header onClick={this.props.showActionsheet.bind(this,this)} style={{
      		width:"100%",
      		height:"50px",
      		lineHeight:"50px",
      		textAlign:"center",
      		backgroundColor:"red",
      		color:"white"
      	}}>{this.state.title}</header>
      </div>
		);
	}
	componentDidMount() {
		// 组件装载完成以后声明一个自定义事件
		this.eventEmitter = emitter.addListener('changeMessage', (title) => {
			this.setState({
				title,
			});
		});
	}
	componentWillUnmount() {
		emitter.removeListener(this.eventEmitter);
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