import React from 'react';
import ReactDOM from 'react-dom';

//import {} from 'framework7-react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//weui
import "weui";
//全局自定义样式
import './index.css';
//根组件
import App from './App';

import registerServiceWorker from './registerServiceWorker';

//redux Provider是把store用在所有组件中
import { Provider } from 'react-redux';
//createStore是创建仓库的方法
import { createStore } from 'redux';

//页面组件
//主页
import Home from './pages/home/home';
//设置页
import Setting from './pages/setting/setting';
//详情页
import Detail from './pages/detail/detail';

// Store 创建仓库
const store = createStore((state = {
	isShowGallery: false,
	gallerySrc: "",
	count: 0,
	isShowActionSheet: false
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
		case 'showActionsheet':
			return Object.assign({}, state, {
				isShowActionSheet: action.isShowActionSheet,
			});
		default:
			return state
	}
});

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<div>
				<Route exact path="/" component={Home}/>
				<Route path="/setting" component={Setting}/>
				<Route path="/detail" component={Detail}/>
			</div>
		</Provider>
	</Router>,
	document.getElementById('root'));
registerServiceWorker();