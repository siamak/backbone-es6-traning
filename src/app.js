import {Model, View, Collection} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const Person = Model.extend({
	defaults: {
		id: 0,
		name: 'Adam Sandler',
		birthday: 1966,
		twitter: 'adamsandler'
	},
	initialize() {
		this.ageCalculator();
	},
	ageCalculator() {
		this.attributes.age = new Date().getFullYear() - this.attributes.birthday;
	}
});

const People = Collection.extend({
	model: Person
});

const Markup = View.extend({
	initialize() {
		this.render();
	},
	render() {
		const templateDOM = $('#template').html();
		const template = _.template(templateDOM);
		$('#unique').html(template({
			people: this.collection.toJSON()
		}));
	}
});

$(document).ready(function () {
	const Siamak = new Person({
		id: 1000,
		name: 'Siamak Mokhtari',
		birthday: 1996,
		twitter: 'sia_mac'
	});
	const Elahe = new Person({
		id: 1001,
		name: 'Elahe Hashemi',
		birthday: 1995,
		twitter: 'eli___h'
	});
	const Class = new People([Siamak, Elahe]);
	const View = new Markup({
		collection: Class
	});
});
