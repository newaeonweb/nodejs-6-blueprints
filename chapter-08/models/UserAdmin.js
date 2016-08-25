var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * UserAdmin Model
 * ==========
 */
var UserAdmin = new keystone.List('UserAdmin');

UserAdmin.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
UserAdmin.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
UserAdmin.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
UserAdmin.defaultColumns = 'name, email, isAdmin';
UserAdmin.register();
