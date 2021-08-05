import React from "react";
import { Link } from "react-router-dom";
// Logos
import JCLogo from "../../images/jc-logo.svg";
import TMDMBogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={JCLogo} alt="rmdb-logo" />
      </Link>
      <TMDBLogoImg src={TMDMBogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
