import React from 'react';

export default React.createClass({
	render() {
		return(
			<div>
				<img src={this.props.detail.image} width="400px"/>
				<h3>{this.props.detail.firstName} {this.props.detail.lastName}
				</h3>
				<p>{this.props.detail.bio}</p>
			</div>
			);
	}
});