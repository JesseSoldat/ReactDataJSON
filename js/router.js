import React from 'react';
import ReactDom from 'react-dom';
import Backbone from 'backbone';

import {Data} from './data';

import {
	HomeComponent
} from './views';

export default Backbone.Router.extend({

	routes: {
		'' : 'showHome'
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
			data={this.json}/>

			);


	}

});