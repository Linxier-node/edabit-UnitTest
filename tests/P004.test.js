const User = require('../Problems/P004');

describe('User class',()=>{
  beforeEach(() => {
    // Reset userCount before each test to ensure isolated test cases
    User.userCount = 0;
  });
  test('should return value equals 1',()=>{
    const u1 = new User('ahmed1441')
    expect(User.userCount).toBe(1)

    const u2 = new User('maged123')
    expect(User.userCount).toBe(2)

    const u3 = new User('maged123')
    expect(User.userCount).toBe(3)
  })

  test('should store the username correctly for each instance', () => {
    const u1 = new User("johnsmith10");
    expect(u1.username).toBe("johnsmith10");

    const u2 = new User("marysue1989");
    expect(u2.username).toBe("marysue1989");

    const u3 = new User("milan_rodrick");
    expect(u3.username).toBe("milan_rodrick");
  });
  
  
})