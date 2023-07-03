import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoImage src={Logo} alt="Logo" />
      <Text>Transformando visitantes em clientes</Text>
      <ColumnsContainer>
        <Column>
          <ColumnTitle>Links Principais</ColumnTitle>
          <Cell>Home</Cell>
          <Cell>Ferramenta</Cell>
          <Cell>LPreços</Cell>
          <Cell>Contato </Cell>
        </Column>
        <Column>
          <ColumnTitle>Cases</ColumnTitle>
          <Cell>Geração B2B</Cell>
          <Cell>Geração B2B</Cell>
          <Cell>Geração B2B</Cell>
          <Cell>Geração B2B</Cell>
        </Column>
        <Column>
          <ColumnTitle>Materiais</ColumnTitle>
          <Cell>Blog 1</Cell>
          <Cell>Blog 2</Cell>
          <Cell>Blog 3</Cell>
          <Cell>Blog 4</Cell>
        </Column>
        <Column>
          <ColumnTitle>Siga a Leadster</ColumnTitle>
          <SocialIcons>
            <IconWrapper>
              <FontAwesomeIcon icon={faDownload} />
            </IconWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faDownload} />
            </IconWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faDownload} />
            </IconWrapper>
          </SocialIcons>
          <ContactInfo>Email: exemplo@leadster.com</ContactInfo>
          <ContactInfo>Telefone: (00) 1234-5678</ContactInfo>
        </Column>
      </ColumnsContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #f8f8f8; */
  padding: 30px;
`;

const LogoImage = styled(Image)`
  width: 120px;
  height: 40px;
`;

const Text = styled.p`
  margin-top: 10px;
  font-size: 12px;
`;

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ColumnTitle = styled.h4`
  font-size: 18px;
  font-family: 'Plus-bold';
  margin-bottom: 10px;
`;

const Cell = styled.p`
  font-size: 14px;
  margin: 5px 0;
  font-family: 'Plus-Regular';
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  svg {
    width: 15px;
    height: 15px;
  }
`;

const ContactInfo = styled.p`
  font-size: 14px;
  margin: 2px 0;
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 5px;
`;



export default Footer;
