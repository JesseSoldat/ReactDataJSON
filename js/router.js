import React from 'react';
import ReactDom from 'react-dom';
import Backbone from 'backbone';

import {Data} from './data';

import {
	HomeComponent,
	DetailsComponent
} from './views';

export default Backbone.Router.extend({

	routes: {
		'' : 'showHome',
		'details/:id' : 'showDetails'
	},

	initialize(appElement) {
		this.el = appElement;

		this.json = Data;
	},

	render(component) {
		ReactDom.render(component, this.el);
	},

	start() {
		Backbone.history.start();
		return this;
	},

	goto(route) {
		this.navigate(route, {
			trigger: true
		});
	},

	showHome() {
		// let user = this.json[1].firstName;
		// document.write(user);

		this.render(
			<HomeComponent 
			data={this.json}
			details={(id) => this.goto('details/' + id)}/>

			);
	},
	showDetails(id) {
		// console.log(id);
		// console.log(this.json);
		let bio = this.json.filter(function(obj){
				if(obj.objectId === id) {
					// console.log(obj.objectId);
					return obj;
				}
		});
		let userBio = bio[0];
		// console.log(userBio);
		
		this.render(
			<DetailsComponent
			detail={userBio}/>
			);
	}

});