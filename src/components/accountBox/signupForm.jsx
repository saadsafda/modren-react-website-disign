import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { signUpUserStart } from "./../../redux/User/user.actions";

import FormInput from "./FormInput";
import Button from "./Button";
import { Marginer } from "../marginer";
import { BoldLink, MutedLink } from "./common";
import { AccountContext } from "./context";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const Signup = (props) => {
  const { switchToSignin } = useContext(AccountContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, userErr } = useSelector(mapState);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      reset();
      history.push("/");
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const reset = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signUpUserStart({
        displayName,
        email,
        password,
        confirmPassword,
      })
    );
  };

  return (
    <div>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}

        <form onSubmit={handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={(e) => setDisplayName(e.target.value)}
          />

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

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Marginer direction="vertical" margin="1em" />
          <Button type="submit">Register</Button>
        </form>

        <div className="links">
          <Marginer direction="vertical" margin={5} />
          <MutedLink>
            Already have an account?
            <BoldLink href="#" onClick={switchToSignin}>
              sign in
            </BoldLink>
          </MutedLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
