import Image from "next/image";
import React from "react";
import styled from "styled-components";
import ComparativoImage from "../../public/images/comparativo_img_CTA.png";
import Selo from "../../public/images/selo_RD.png";
import Rating from "../../public/images/rating.webp";
import Nocard from "../../public/images/no-card-dark.webp";

const InfosContainer = () => {
  return (
    <Container>
      <LeftSection>
        <ImageWrapper>
          <Image src={ComparativoImage} width={350} height={300}  objectFit="cover" alt="Imagem" />
        </ImageWrapper>
      </LeftSection>
      <RightSection>
        <Title>Pronto para triplicar sua <br/> <SpanText>Geração de Leads?</SpanText></Title>
        <Subtitle>Criação e ativação em 4 minutos.</Subtitle>
        <Separator />
        <ButtonContainer>
          <Button>VER DEMONSTRAÇÃO</Button>
          <Image src={Selo} width={115} height={40} alt="Imagem" />
        </ButtonContainer>
        <InformesContainer>
          <Image src={Nocard} width={20} height={20} alt="Imagem" />
          <BottomText>Não é necessário Cartão de Crédito</BottomText>
          <SeparatorVertical />
          <Image src={Rating} width={100} height={15} alt="Imagem" />
          <BottomText>4.9/5 média de satisfação</BottomText>
        </InformesContainer>
      </RightSection>
    </Container>
  );
};

const Container = styled.div`
  background-color: #dbeafe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 400px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-right: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-family: 'Plus-Regular';
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const SpanText = styled.span`
  font-family: 'Plus-bold';
`;

const Separator = styled.div`
  width: 70%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  background-color: #2c83fb;
  font-family: 'Plus-Regular';
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const ImageSmall = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const InformesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    align-self: flex-start;
  }
`;

const BottomText = styled.p`
  font-size: 12px;
  font-family: 'Plus-Regular';
  margin-right: 5px;
  margin-left: 5px;
`;

const SeparatorVertical = styled.div`
  width: 1px;
  height: 20px;
  background-color: #ccc;
  margin: 0 5px;
`;

export default InfosContainer;
