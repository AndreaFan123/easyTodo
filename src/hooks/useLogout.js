import { useState } from "react";
import { useAuthContext } from "./useContext";
import { ACTIONS } from "../context/authContext";

import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setPending(true);

    try {
      await signOut(auth);

      dispatch({
        type: ACTIONS.LOGOUT,
      });
    } catch (error) {
      setError(error.message);
      console.log(error.message);
      setPending(false);
    }
  };
  return { logout, pending, error };
};
