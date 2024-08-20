class User {
  // Static property to keep track of the number of instances
  static userCount = 0;

  constructor(username) {
    this.username = username;
    // Increment the user count each time a new instance is created
    User.userCount += 1;
  }
}
module.exports = User
// Example usage
