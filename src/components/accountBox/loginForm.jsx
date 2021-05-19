import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  emailSignInStart,
  googleSignInStart,
} from "./../../redux/User/user.actions";

import FormInput from "./FormInput";
import Button from "./Button";
import { Marginer } from "../marginer";
import { BoldLink, MutedLink } from "./common";
import { AccountContext } from "./context";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const LoginForm = (props) => {
  const { switchToSignup } = useContext(AccountContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push("/");
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  return (
    <div>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Marginer direction="vertical" margin="1em" />
          <Button type="submit">LogIn</Button>

          <Marginer direction="vertical" margin="1em" />
          <div className="socialSignin">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
            </div>
          </div>
        </form>
      </div>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink>
      </MutedLink>
    </div>
  );
};

export default LoginForm;
