import React, {
	Component
} from 'react';

import Xchild from '../xchild/xchild'

export default class Xlifecycle extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			name:"生命周期",
			bool:true
		}
	}
	getInputValue(e){
		this.setState({
			name:e.target.value
		})
	}
	toggle(){
		this.setState({
			bool:!this.state.bool
		})
	}
	render(){
		return (
			<div ref="ele">
				<input value={this.state.name} onChange={this.getInputValue.bind(this)} />
				<p ref="name" style={{color:'red'}}>{this.state.name}</p>
				<button onClick={this.toggle.bind(this)}>点击切换</button>
				{
					(function(self){
						if(self.state.bool){
							return <Xchild name={self.state.name} />
						}else{
							return;
						}
					})(this)
				}
				{/*<Xchild name="子组件2" />*/}
			</div>
		)
	}
	componentWillMount(){
		//数据有，将数据装载到模板，但还没有挂载到页面
		console.log("componentWillMount在渲染前调用,在客户端也在服务端");
		console.log(this.state);
		console.log(this.refs.ele);
	}
	componentDidMount(){
		//将模板挂载到节点上  一般的一些操作都在这个生命周期
		console.log("componentDidMount在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构");
		console.log(this.state);
		console.log(this.refs.ele);
	}
	componentWillUpdate(){
		console.log("componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用");
		console.log(this.state);
		console.log(this.refs.name);
	}
	componentDidUpdate(){
		console.log("componentDidUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用");
		console.log(this.state);
		console.log(this.refs.name);
	}
	shouldComponentUpdate(){
		//false页面不更新
		//true页面更新
		if(this.state.name.length>9){
			return false
		}else{
			return true
		}
	}
}