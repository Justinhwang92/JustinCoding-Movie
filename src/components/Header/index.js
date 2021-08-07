import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Logos
import JCLogo from "../../images/jc-logo.svg";
import TMDMBogo from "../../images/tmdb_logo.svg";
// Context
import { Context } from "../../context";
// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
import Button from "../Button";

const Header = () => {
  const [user] = useContext(Context);
  // console.log(user);
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={JCLogo} alt="rmdb-logo" />
        </Link>
        {user ? (
          <span>Logged in as:{user.username}</span>
        ) : (
          <Link to="/login">
            <span>Login</span>
          </Link>
        )}
        <TMDBLogoImg src={TMDMBogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
