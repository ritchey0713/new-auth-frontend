const INITIAL_STATE = {
  currentUser: null,
  loggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: true,
      };
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default userReducer;
