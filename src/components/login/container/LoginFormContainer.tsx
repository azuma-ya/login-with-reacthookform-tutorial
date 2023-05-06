import React from "react";
import LoginForm, { LoginFormData } from "../presenter/LoginForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/userSlice";

interface LoginFormContainerProps {
  onLogin: (error?: Error) => void;
}

const LoginFormContainer = ({ onLogin }: LoginFormContainerProps) => {
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }: LoginFormData) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser(user));
        onLogin();
      })
      .catch((error) => {
        onLogin(error);
      });
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginFormContainer;
