import React, { Component } from "react";
import  styled  from "styled-components";
import { CustomContainer } from "./index.css";

const InfosContainer = () => {
  return(
    <Section>
      <ContentWrapper> 

      </ContentWrapper>
    </Section>
    );
};

export default InfosContainer;

const Section = styled.section`
  background-color: #dbeafe;
  padding: 40px;
  width: 100%;
  height: 400px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
`;