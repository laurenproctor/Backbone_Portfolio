app.models.User = Backbone.Model.extend({

	defaults:{
		first_name: 'Lauren',
		last_name: 'Proctor',
		bio: 'Click to edit bio',
		mission: 'Mission goes here'
	},

	initialize: function() {
		this.bind('invalid', 'showError');
	},

	// validate: function() {
	// 	if(typeof first_name == undefined || first_name == null || first_name.length == 0)
	// 		return "first_name is not filled in";
	// 	}
	// },

	// showError: function(model, error) {
	// 	$('#errors').append(error).slideDown();
	// }

  full_name: function() {
    return this.attributes.first_name + " " + this.attributes.last_name;
  },

});