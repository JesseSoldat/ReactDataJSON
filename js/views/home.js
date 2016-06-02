import React from 'react';

export default React.createClass({
	details(id) {
		// console.log(id);
		this.props.details(id);
	},
	formatData(data) {
		return <div onClick={() => this.details(data.objectId)} key={data.objectId}>
					<img src={data.image} width="100px"/>
					<h3>{data.firstName} {data.lastName}</h3>
				</div>
	},
	render(){
		return(
			<div>{this.props.data.map(this.formatData)}</div>
			);
	}
});