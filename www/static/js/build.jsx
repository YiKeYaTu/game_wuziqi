var Character = React.createClass({
	componentDidMount : function () {
		
	},
	render : function () {
		return (
			<div 
				style={{
					top: '100px',
					left: 0,
					position: 'absolute',				
					width: '20px',
					height: '20px',
					borderRadius: '100%',
					background: '#000'
				}}
			>
			</div>
		)
	}
});
var Box = React.createClass({
	render : function () {

	}
});
var PersonList = React.createClass({
	getInitialState: function() {
	    return {mouseIn: false};
	},
	handleMouseOver : function () {
		this.setState({
			mouseIn: true
		})
	},
	handleMouseOut : function () {
		this.setState({
			mouseIn: false
		})
	},
	handleClick : function (e) {
		e.preventDefault();
	},
	render : function () {
		var color = this.state.mouseIn?'#fff':'#333',
			display = this.state.mouseIn?'block':'none';
		return (
			<ul style={{
				position: 'fixed',
				top: (window.innerHeight - 300)/2 + 'px',
				left: '0px',
				width: '100px',
				height: '300px',
				border: '2px solid rgb(173,138,114)',
				borderTopRightRadius: '6px',
				borderBottomRightRadius: '6px',
				background: 'rgb(215,188,156)',
				zIndex: 1,
			}}>
				<li style={{
					textAlign: 'center',
					borderBottom: '2px solid rgb(173,138,114)',
					position: 'relative'
				}}>
					<a style={{
						display: 'block',
						color: color,
						lineHeight: '30px',
						height: '30px',
					}} href="" ref='link' 
					onMouseOver={this.handleMouseOver}
					onMouseOut={this.handleMouseOut}
					onClick={this.handleClick}
					 >傻逼一号</a>
					<span style={{
						position: 'absolute',
						top: 0,
						left: '104px',
						lineHeight: '30px',
						color: 'red',
						display: display
					}}>
						Go!
					</span>
				</li>
			</ul>
		)
	}
})
var Container = React.createClass({
	componentDidMount : function () {
		this.refs.container.style.height = window.innerHeight + 'px';
	},
	render : function () {
		return (
			<div className='outer'>
				<PersonList/>
				<div ref='container' className='container'
					style={{
						width: '100%',
						overflow: 'hidden',
						position: 'relative',
					}}
				>
					<RealContainer/>
				</div>
			</div>
		)
	}
});
var RealContainer = React.createClass({
	specifications : '10X10',
	render : function () {
		var arr = [];
		var str1 = this.specifications.split('X')[0];
		var str2 = this.specifications.split('X')[1];
		for (var i = 0;i < str1 * str2;i++) {
			arr.push(1);
		}
		return (
			<div className='real-container' style={{
				margin: '0 auto',
				marginTop : (window.innerHeight - str2 * 32)/2 + 'px',
				border: '1px solid rgb(173,138,114)',
				width: str1 * 32 + 'px',
				height: str2 * 32 + 'px',
				transform: 'rotateX(30deg)'
			}}>
				{
					arr.map(function (item,index) {		
						if (index % str1 == 0 && index > 0) {
							return <Mesh x={index % 10} y={Math.floor(index/10)} p='clear'/>
						} else {
							return <Mesh x={index % 10} y={Math.floor(index/10)}/>
						}
					})
				}
			</div>
		)
	}
});
var Chess = React.createClass({
	render : function () {
		return (
			<div style={{
				width: '24px',
				height: '24px',
				background: this.props.co,
				borderRadius: '100%',
				margin: '3px 3px',
				opacity: this.props.op
			}}>
			</div>
		)
	}
});
var Mesh = React.createClass({
	css : function () {
		var cssText = {
			width: '30px',
			height: '30px',
			border: '1px solid rgb(173,138,114)',
			float: 'left',
			background: 'rgb(215,188,156)'
		};
		if (this.props.p == 'clear') {
			cssText.clear = 'both';
		}
		return cssText;
	},
	handleMouseOver : function () {
		if (this.refs.border.clicked != 'true') {
			React.render(
				<Chess 
				op='0.5'
				co='#000'
				/>,
				this.refs.border
			);
		}
	},
	handleMouseOut : function (e) {
		if (this.refs.border.clicked != 'true' && (!e.relatedTarget || e.relatedTarget.parentNode != this.refs.border)) {
			this.refs.border.removeChild(this.refs.border.firstElementChild);
		}
	},
	handleClick : function (e) {
		var target = e.currentTarget;
		target.clicked = 'true';
		target.firstElementChild.style.opacity = '1';
	},
	render : function () {
		return (
			<div 
			ref='border' 
			x={this.props.x}
			y={this.props.y}
			onMouseOver={this.handleMouseOver}
			onMouseOut={this.handleMouseOut}
			onClick={this.handleClick}
			style={this.css()}
			>
			</div>
		)
	}
})
React.render(
	<Container/>,
	document.body
);