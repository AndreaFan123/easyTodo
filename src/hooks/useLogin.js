import { useState } from "react";
import { useAuthContext } from "./useContext";
import { ACTIONS } from "../context/authContext";

import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  // setup initial state
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const { dispatch } = useAuthContext();

  // create login func
  const login = async (email, password) => {
    setError(null);
    setPending(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not login, try after 1 min");
      }

      dispatch({
        type: ACTIONS.LOGIN,
        payload: res.user,
      });
    } catch (error) {
      setError(error.message);
      console.log(error.message);
      setPending(false);
    }
  };

  return { login, pending, error };
};
