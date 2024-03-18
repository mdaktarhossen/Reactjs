const UserReducer = (users, action) => {
  switch (action.type) {
    case "addUser": {
      return [...users, action.newUser];
    }
  }
};
