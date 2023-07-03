import React, { Component, useState } from "react";
import styled from "styled-components";
import { CustomContainerVideos } from "./index.css";
import CardComponent from "@/components/CardComponent";
import ButtonOutlined from "@/components/ButtonOutlined";

const VideosContainer = () => {
  const [selectedOption, setSelectedOption] = useState("Agências");

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <CustomContainerVideos>
      <ButtonOutlined selectedOption={selectedOption} onSelectOption={handleSelectOption} />
      <CardComponent />
    </CustomContainerVideos>
  );
};

export default VideosContainer;
