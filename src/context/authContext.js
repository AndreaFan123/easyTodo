import { useReducer, createContext, useEffect } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

// initial state
export const initState = {
  user: null,
  alreadyLogin: false,
};

export const ACTIONS = {
  LOGIN: "login",
  LOGOUT: "logout",
  CHECKLOGIN: "checklogin",
};

// create global context object
export const AuthContext = createContext();

// create reducer func
export const authReducer = (state, action) => {
  // create actions that identify when dispatch function is triggering
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { ...state, user: action.payload };
    case ACTIONS.LOGOUT:
      return { ...state, user: null };
    case ACTIONS.CHECKLOGIN:
      return { ...state, user: action.payload, alreadyLogin: true };
    default:
      return state;
  }
};

// Create a context that will wrap entire application, so that those component can implement it
export const AuthContextProvide = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch({
        type: ACTIONS.CHECKLOGIN,
        payload: user,
      });
      unsubscribe();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
