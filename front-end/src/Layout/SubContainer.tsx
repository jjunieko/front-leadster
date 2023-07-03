import React from "react";
import styled from "styled-components";
import Image from "next/image";
import webinarImage from "../../public/images/asset-header.png";

const SubContainer = () => {
  return (
    <Section>
      <ContentWrapper>
        <Button>WEBINARS EXCLUSIVOS</Button>
        <TextWrapper>
          <LessText>Menos conversinha,</LessText>
          <MoreText>
            <ImageWrapper>
              <Image src={webinarImage} width={45} height={32} alt="Webinar Image" />
            </ImageWrapper>
            Mais conversão
          </MoreText>
        </TextWrapper>
        <Line />
        <p>Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio</p>
      </ContentWrapper>
    </Section>
  );
};

export default SubContainer;

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

const Button = styled.button`
  border: 2px solid #2c83fb;
  border-radius: 20px 20px 20px 0px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: transparent;
  color: #2c83fb;
  margin-bottom: 20px;
`;

const LessText = styled.p`
  font-size: 32px;
  font-weight: 500;
  font-family: "Plus Jakarta Sans", sans-serif;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const MoreText = styled.p`
  font-size: 60px;
  margin-bottom: 20px;
  color: #2c83fb;
  font-weight: bold;
  font-family: "Plus Jakarta Sans", sans-serif;
  /* white-space: nowrap; */

  @media (max-width: 530px) {
    font-size: 40px;
    padding: 20px
  }
`;

const Line = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  width: 60%;
`;

const ImageWrapper = styled.span`
  margin-right: -22px;
  margin-bottom: -30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;

  @media (max-width: 530px) {
    display: none
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
