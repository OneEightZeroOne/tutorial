import React from 'react';
import ReactDOM from 'react-dom';
//weui
import "weui";
//全局自定义样式
import './index.css';
//根组件
import App from './App';
//头部组件
import Xheader from './components/xheader/xheader';
//搜索框组件
import Xsearch from './components/xsearch/xsearch';
//列表组件
import Xpanel from './components/xpanel/xpanel';

import Xjsx from './components/xjsx/xjsx';
//指令示例组件

//生命周期示例组件
import Xlifecycle from './components/xlifecycle/xlifecycle';

import registerServiceWorker from './registerServiceWorker';

//redux Provider是把store用在所有组件中
import { Provider } from 'react-redux';
//createStore是创建仓库的方法
import { createStore } from 'redux';

// Store 创建仓库
const store = createStore((state = {
	isShowGallery: false,
	gallerySrc: "",
	count: 0
}, action) => {
	const count = state.count
	switch(action.type) {
		//触发动作
		case 'showGallery':
			/*return {
				...state,
				count: count + 2
			}*/
			return Object.assign({}, state, {
				isShowGallery: action.isShowGallery,
				gallerySrc: action.gallerySrc
			});
		case 'hideGallery':
			return Object.assign({}, state, {
				isShowGallery: action.isShowGallery,
				gallerySrc: action.gallerySrc
			});
		default:
			return state
	}
});

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Xheader />
			<Xsearch />
			<Xpanel />
			<Xjsx />
			<Xlifecycle />
		</div>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();