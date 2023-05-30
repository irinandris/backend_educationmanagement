const dump_users = [
  {
    username: "john",
    password: "1234",
    role: 0,
    fname: "John",
    lname: "Smith",
  },
  {
    username: "alex",
    password: "1234",
    role: 0,
    fname: "Alex",
    lname: "Smith",
  },
  {
    username: "will",
    password: "1234",
    role: 1,
    fname: "Will",
    lname: "Smith",
  },
];

module.exports = {
  loginService: (username, password) => {
    return dump_users.find(
      (user) => user.username === username && user.password === password
    );
  },
};
