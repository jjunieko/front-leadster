import Image from "next/image";
import React from "react";
import styled from "styled-components";

import LogoImage from '../../public/images/logo.png';
import { CustomContainer, StyledImage } from "./index.css";

const NavContainer = () => {
  return (
    <CustomContainer>
      <section>
        <nav>
          <StyledImage src={LogoImage}  alt="logo"/>
        </nav>
      </section>
    </CustomContainer>
  );
};

export default NavContainer;


