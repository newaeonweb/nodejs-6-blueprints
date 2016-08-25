var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * ==========
 */

var About = new keystone.List('About', {
	// Using map to show title instead ObjectID on Admin Interface
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

About.add({
	title: { type: String, initial: true, default: '', required: true },
	description: { type: Types.Textarea }
});

About.defaultColumns = 'title, description|60%';
About.register();
