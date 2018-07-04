import React, {
	Component
} from 'react';
export default class Xchild extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			name:"子组件"
		}
	}
	render(){
		return (
			<div>{this.props.name}</div>
		)
	}
	componentWillReceiveProps(){
		console.log(this.props.name)
		console.log("componentWillReceiveProps在组件接收到一个新的 prop (更新后)时被调用")
	}
	//v-if 路由
	componentWillUnmount(){
		console.log("componentWillUnmount")
	}
}