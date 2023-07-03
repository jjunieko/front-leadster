import React from "react";
import styled from "styled-components";

interface OutlinedProps {
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

const ButtonOutlined: React.FC<OutlinedProps> = ({ selectedOption, onSelectOption }) => {
  const options = ["Agências", "Chatbot", "Marketing Digital", "Geração de Leads", "Mídia Paga"];
  
  const handleOptionClick = (option: string) => {
    onSelectOption(option);
  };
  
  return (
    <>
    <OutlinedContainer>
      <ButtonGroup>
        {options.map((option) => (
          <Button
            key={option}
            selected={selectedOption === option}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </Button>
        ))}
      </ButtonGroup>
      <OrderText>Ordenado por</OrderText>
      <Select value={selectedOption} onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => onSelectOption(e.target.value)}>
        <option value="data_publicacao">Data de Publicação</option>
        <option value="outro_criterio">Outro Critério</option>
      </Select>
    </OutlinedContainer>
    <Separator />
    </>
  );
};

export default ButtonOutlined;

const OutlinedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
  font-size: 12px;
  font-family: "Plus-Regular", sans-serif;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

interface ButtonProps {
  selected: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  border: 1px solid ${(props) => (props.selected ? "#2c83fb" : "#ccc")};
  color: ${(props) => (props.selected ? "#2c83fb" : "#000")};
  background-color: transparent;
  border-radius: 20px;
  cursor: pointer;
  font-family: "Plus-Regular", sans-serif;
  font-size: 12px;
`;

const OrderText = styled.span`
  margin-left: 16px;
`;

const Select = styled.select`
  margin-left: 8px;
  border-radius: 12px;
  width: 150px;
  height: 35px;
  font-family: "Plus-Regular", sans-serif;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 8px;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
  margin-left: 20px;
  margin-right: 20px;
`;
