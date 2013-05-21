describe("A User", function() {

  var user;

  beforeEach(function() {
    user = new app.models.User({
      first_name: 'Lauren',
      last_name: 'Proctor',
      image_url: 'uploads/me.jpg',
      bio: 'NYC yeah',
      mission: 'Skateboard the entire city'
    });
  });

  it("should know how to print the entire name", function() {
    expect(user.full_name()).toEqual("Lauren Proctor");
  });

});