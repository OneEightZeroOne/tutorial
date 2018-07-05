import React, {
	Component
} from 'react';
import { connect } from 'react-redux';
class Xactionsheet extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
		}
	}
	render(){
		return (
			<div style={{
				transform: this.props.isShowActionSheet?'translate(0, 0)':'translate(0, 100%)'
			}} className="weui-actionsheet" data-showactionsheet={this.props.isShowActionSheet}>
	            <div className="weui-actionsheet__menu">
	                <div className="weui-actionsheet__cell">示例菜单</div>
	                <div className="weui-actionsheet__cell">示例菜单</div>
	                <div className="weui-actionsheet__cell">示例菜单</div>
	            </div>
	        </div>
		)
	}
}
export default connect((state) => {
	//他把store的state全部放到该组件的props里面
	return state
}, (dispatch) => {
	return {
		showActionsheet: () => {
			//可以触发多个
			dispatch({
				type: 'showActionsheet',
				isShowActionSheet: true,
			})
		}
	}
})(Xactionsheet)