import React, {
	Component
} from 'react';
//css
//头部组件
import Xheader from '../../components/xheader/xheader';
//搜索框组件
import Xsearch from '../../components/xsearch/xsearch';
//列表组件
import Xpanel from '../../components/xpanel/xpanel';

import Xjsx from '../../components/xjsx/xjsx';
//指令示例组件

//生命周期示例组件
import Xlifecycle from '../../components/xlifecycle/xlifecycle';
//弹窗
import Xactionsheet from '../../components/xactionsheet/xactionsheet'
//html
class Home extends Component {
	//data  S->V   V->S
	constructor(props) {
		super(props);
		//M
		this.state = {};
	}

	//template
	render() {
		return(
			<div>
				<Xheader />
				<Xsearch />
				<Xpanel />
				<Xjsx />
				<Xlifecycle />
				<Xactionsheet />
			</div>
		);
	}
}

export default Home;