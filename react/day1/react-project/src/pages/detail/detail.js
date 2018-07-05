import React, {
	Component
} from 'react';
//css

//html
class Detail extends Component {
	//data  S->V   V->S
	constructor(props) {
		super(props);
		//M
		this.state = {
		};
	}

	//template
	render() {
		return(
			<div className="page__bd">
		        <article className="weui-article">
		            <h1>大标题</h1>
		            <section>
		                <h2 className="title">章标题</h2>
		                <section>
		                    <h3>1.1 节标题</h3>
		                    <p>
		                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		                        consequat.
		                    </p>
		                    <p>
		                        <img src="./images/pic_article.png" alt="" />
		                        <img src="./images/pic_article.png" alt="" />
		                    </p>
		                </section>
		                <section>
		                    <h3>1.2 节标题</h3>
		                    <p>
		                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		                    </p>
		                </section>
		            </section>
		        </article>
		    </div>
		);
	}
}

export default Detail;