import { useState } from "react";
import { useAuthContext } from "./useContext";
import { ACTIONS } from "../context/authContext";

import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
  // need error and pending to detect state changing
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  // Need dispatch to detect action type in order to trigger reducer func to get data
  const { dispatch } = useAuthContext();

  // signup func takes 3 params
  const signup = async (email, password, displayName) => {
    // Initialize the error states is nothing and also makes the loading status become true
    setError(null);
    setPending(true);

    // use try catch block to make sure the error is detectable
    try {
      // get response from firebase auth
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // if there's no res, we throw an error
      if (!res) {
        throw new Error("Could not complete signup");
      }

      // update user profile by sending displayname when we have a res
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      // fire login action
      dispatch({
        type: ACTIONS.LOGIN,
        payload: res.user,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email already in use");
      } else if (error.code === "auth/weak-password") {
        setError("Password needs to be at least 6 characters or digits");
      } else {
        setError(error.message);
      }
      // since there's an error, we stoping loading anything
    } finally {
      setPending(false);
    }
  };

  return { signup, pending, error };
};
