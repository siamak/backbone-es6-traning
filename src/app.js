import Backbone, {Model, View, Collection} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const Person = Model.extend({
	default: {
		id: 0,
		name: 'Adam Daniel',
		birthday: 1950,
		age: 20,
		twitter: 'tweet'
	},
	initialize() {
		this.ageCalculator();
	},
	ageCalculator() {
		this.age = new Date().getFullYear() - this.birthday;
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
		// console.log(this.model.map(child => child.attributes.name));
		const templateDOM = $('#test-template').html();
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
		birthday: 1996,
		twitter: 'eli___h'
	});
	const Class = new People([Siamak, Elahe]);
	const View = new Markup({
		collection: Class
	});
});
