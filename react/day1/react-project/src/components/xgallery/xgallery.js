import React, {
	Component
} from 'react';
import { connect } from 'react-redux';
//html
class Xgallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src:"",
		}
		console.log(this.props)
	}
	render() {
		return(
			<div className="weui-gallery" style={{display: this.props.isShowGallery?'block':'none'}}>
		        <span className="weui-gallery__img" style={{backgroundImage: `url(${this.props.gallerySrc})`}}></span>
		        <div className="weui-gallery__opr" onClick={this.props.hideGallery.bind(this)}>
		            <a href="javascript:" className="weui-gallery__del">
		                <i className="weui-icon-delete weui-icon_gallery-delete"></i>
		            </a>
		        </div>
		    </div>
		);
	}
}

export default connect((state) => {
	//他把store的state全部放到该组件的props里面
	return state
}, (dispatch) => {
	return {
		hideGallery: () => {
			//可以触发多个
			dispatch({
				type: 'hideGallery',
				isShowGallery: false,
				gallerySrc:""
			})
		}
	}
})(Xgallery);