var React = require('react');

module.exports = Item = React.createClass({
	getInitialState:function(){
		return {
			count:0
		};
	},
	_increment:function(){
		this.setState({count:this.state.count+1});
	},
	_decrement:function(){
		this.setState({count:this.state.count-1});
	},
	render:function(){
		return (
			<div className="container">
			<div className="jumbotron">
			<h2>Yayyy!!, Isomorphic!!</h2>
			<div id="controls">
			<button onClick={this._decrement} className="btn btn-default">-</button>
			<div>{this.state.count}</div>
			<button onClick={this._increment} className="btn btn-primary">+</button>
			</div>
			</div>
			</div>
			)
	}
});