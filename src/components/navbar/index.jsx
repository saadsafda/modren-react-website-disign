import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";

import { Link, useLocation } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { auth } from "../../firebase/utils";
import { useDispatch, useSelector } from "react-redux";
import { signOutUserStart } from "../../redux/User/user.actions";
import { PowerSettingsNew } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled(Link)`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const Seperator = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #fff;
`;

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  // totalNumCartItems: selectCartItemsCount(state),
});

export function Navbar(props) {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  useEffect(() => {
    setActiveMenu(false);
  }, [location]);

  return (
    <NavbarContainer>
      <BrandLogo />
      {currentUser && [
        <AccessibilityContainer>
          <Marginer direction="horizontal" margin={10} />
          <Link to="/account">
            <Button size={11}>My Account</Button>
          </Link>
          <Marginer direction="horizontal" margin={10} />
          <span onClick={() => signOut()}>
            <IconButton>
              <PowerSettingsNew />
            </IconButton>
          </span>
        </AccessibilityContainer>,
      ]}

      {!currentUser && [
        <AccessibilityContainer>
          {!isMobile && <AnchorLink>Specialists Portal</AnchorLink>}
          {!isMobile && <Marginer direction="horizontal" margin={10} />}
          {!isMobile && <Seperator />}
          <Marginer direction="horizontal" margin={10} />
          <Link to="/signin">
            <Button size={11}>Login</Button>
          </Link>
        </AccessibilityContainer>,
      ]}
    </NavbarContainer>
  );
}

Navbar.defaultProps = {
  currentUser: null,
};
