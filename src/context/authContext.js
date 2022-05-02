import { projectFirebaseAuth } from "../firebase/config";
import { useReducer, createContext } from "react";

// initial state
const initState = {
  user: null,
};

const ACTIONS = {
  LOGIN: "login",
  LOGOUT: "logout",
};

// create global context object
const AuthContext = createContext();

// create reducer func
export const authReducer = (state, action) => {
  // create actions that identify when dispatch function is triggering
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { ...state, user: action.payload };
    case ACTIONS.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

// Create a context that will wrap entire application, so that those component can implement it
export const AuthContextProvide = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initState);

  // console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
