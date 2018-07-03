import React, {
	Component
} from 'react';
//css
import './xsearch.css';

//html
class Xsearch extends Component {
	//data  S->V   V->S
	constructor(props) {
		super(props);
		//M
		this.state = {
			name: "搜索",
			isSearch: false,
			searchInput:""
		};
		//this.toggleSearch = this.toggleSearch.bind(this);
	}
	toggleSearch(e) {
		console.log(e.target)
		this.setState({
			isSearch: !this.state.isSearch,
			name:"xxxxx"
		})
	}
	getInputValue(e){
		console.log(e.target.value)
		this.setState({
			searchInput: e.target.value
		})
	}
	clearInputValue(){
		this.setState({
			searchInput: ""
		})
	}
	//template
	render() {
		return(
			<div>
      	<div className={
      		!this.state.isSearch?'weui-search-bar':'weui-search-bar weui-search-bar_focusing'
      	} id="searchBar">
            <form className="weui-search-bar__form">
                <div className="weui-search-bar__box">
                    <i className="weui-icon-search"></i>
                    <input value={this.state.searchInput} onChange={this.getInputValue.bind(this)} type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                    <a onClick={this.clearInputValue.bind(this)} href="javascript:" className="weui-icon-clear" id="searchClear"></a>
                </div>
                <label onClick={this.toggleSearch.bind(this)} className="weui-search-bar__label" id="searchText" style={{
                	transformOrigin: "0px 0px 0px",
                	opacity: "1",
                	transform: "scale(1, 1)"
                }}>
                    <i className="weui-icon-search"></i>
                    <span>{this.state.name}</span>
                </label>
            </form>
            <a onClick={this.toggleSearch.bind(this)} href="javascript:" className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>
      </div>
		);
	}
}

export default Xsearch;