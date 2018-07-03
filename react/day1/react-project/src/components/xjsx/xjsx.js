import React, {
	Component
} from 'react';
class Xjsx extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "see",
			//v-html
			html: <p>123 <span>456</span>789</p> ,
			//v-for
			arr: [<li key="1">1</li>, <li key="2">2</li>],
			arr2: [{
				name: "ly",
				age: 18
			}, {
				name: "lx",
				age: 81
			}],
			//v-show
			bool: true
		};
	}
	toggle() {
		console.log(1)
		this.setState({
			bool: !this.state.bool
		})
	}

	setName(name) {
		return "我的名字为" + name
	}

	render() {
		return(
			<div>
				<p style={{color:'red'}}>1.v-html</p>
				<div>{this.state.html}</div>
				<p style={{color:'red'}}>2.v-for</p>
				<ul>
					{this.state.arr}
				</ul>
				<ul>
					{(function(self){
						return self.state.arr2.map(function(item,index){
							return <li key={index}>姓名:{item.name} 年龄{item.age}</li>
						})
					})(this)}
				</ul>
				<p style={{color:'red'}}>3.v-show</p>
				<p style={{
					display:this.state.bool?'block':'none'
				}}>显示或者隐藏</p>
				<button onClick={this.toggle.bind(this)}>切换</button>
				<p style={{color:'red'}}>4.v-if</p>
				{
					(function(self){
						console.log(self)
						if(self.state.bool){
							return <p>增加或者删除</p>
						}else{
							return;
						}
					})(this)
				}
				<p style={{color:'red'}}>5.v-text  v-bind:xxx   :xxx</p>
				{
					(function(name){
						var h = "ing"
						return name + h;
					})(this.state.name)
				}
				<p id={
					(function(){
						var name = "abc"
						return name
					})()
				}>123</p>
				<p>{this.setName("老谢")}</p>
				<p>{this.setName(this.state.name)}</p>
			</div>
		)
	}
}

export default Xjsx;