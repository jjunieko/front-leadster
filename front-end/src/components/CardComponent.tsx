import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TumbImage from "../../public/images/thumbnail.png";
import imageUrl from "next/image";

interface CardData {
  id: number;
  imageUrl: string;
  text: string;
}

const CardComponent: React.FC = () => {
  const [data, setData] = useState<CardData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(9);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response: CardData[] = [
        {
          id: 1,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
        {
          id: 2,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
        {
          id: 3,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
        {
          id: 4,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
        {
          id: 5,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
        {
          id: 6,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
        {
          id: 7,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
        {
          id: 8,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
        {
          id: 9,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
        {
          id: 10,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
        {
          id: 11,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
        {
          id: 12,
          imageUrl: "/images/thumbnail.png",
          text: "Como aumentar sua Geração de Leads feat. Traktor",
        },
      ];

      setData(response);
    };

    fetchData();
  }, []);

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: CardData[] = data.slice(indexOfFirstItem, indexOfLastItem);

  // Função para alternar entre as páginas
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  // Função para abrir a modal com o card selecionado
  const openModal = (card: CardData): void => {
    setSelectedCard(card);
  };

  // Função para fechar a modal
  const closeModal = (): void => {
    setSelectedCard(null);
  };

  return (
    <CardContainer>
      {currentItems.map((item) => (
        <>
          <Card key={item.id} onClick={() => openModal(item)}>
            <ImageWrapper>
              <Image src={item.imageUrl} width={80} height={80} alt="Card Image" />
            </ImageWrapper>
            <Text>{item.text}</Text>
          </Card>
        </>
      ))}

      {selectedCard && (
        <ModalContainer>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalHeader>
              <ModalTitle>Webinar:</ModalTitle>
              <ModalText>{selectedCard.text}</ModalText>
            </ModalHeader>
            <ModalVideo>
              {/* Inserir o vídeo do YouTube aqui */}
              {/* Exemplo: */}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube Video" />
            </ModalVideo>
            <ModalDescription>
              <ModalDescriptionTextTitle>Descrição</ModalDescriptionTextTitle>
              <Separator />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ipsum commodo, hendrerit nisi sed, gravida est.
                Vivamus vitae felis odio.
              </p>
            </ModalDescription>
            <ModalDownload>
              <ModalDescriptionTextTitle>Download</ModalDescriptionTextTitle>
            </ModalDownload>
              <Separator />
            <ModalDownloadButton>
              <DownloadButton>SpreedSheet.txt</DownloadButton>
              <DownloadButton>SpreedSheet.txt</DownloadButton>
              <DownloadButtonOrange>SpreedSheet.txt</DownloadButtonOrange>
            </ModalDownloadButton>
          </ModalContent>
        </ModalContainer>
      )}

      {data.length > itemsPerPage && (
        <>
          <Separator />
          <TextPagination>Página </TextPagination>

          <PaginationContainer>
            <Pagination>
              {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                <PageNumber key={index} onClick={() => paginate(index + 1)} active={currentPage === index + 1}>
                  {index + 1}
                </PageNumber>
              ))}
            </Pagination>
          </PaginationContainer>
        </>
      )}
    </CardContainer>
  );
};

export default CardComponent;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -10px;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: calc(33.33% - 20px);
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f2;
  }
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  margin-top: 10px;
  margin: 10px;
  font-family: "plus-bold";
`;

const TextPagination = styled.p`
  font-size: 18px;
  margin-right: 10px;
  font-family: "plus-bold";
  align-self: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
`;

interface PageNumberProps {
  active: boolean;
}

const PageNumber = styled.button<PageNumberProps>`
  border: none;
  background-color: #f0f0f2;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
  border: 2px solid ${(props) => (props.active ? "#2c83fb" : "#FFF")};
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
  margin-left: 20px;
  margin-right: 20px;
`;


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: relative;
  width: 50%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
`;

const ModalTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #2c83fb;
  margin-right: 10px;
`;

const ModalText = styled.p`
  font-size: 18px;
  margin: 0;
  font-family: "plus-bold";
`;

const ModalVideo = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  margin-bottom: 20px;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const ModalDescriptionTextTitle = styled.h4`
  margin-bottom: 20px;
`;

const ModalDescription = styled.div`
  margin-bottom: 20px;
`;

const ModalDownload = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ModalDownloadButton = styled.div`
  display: flex;
`;

const DownloadButtonOrange = styled.button`
  background-color: #f7b740;

  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 12px;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  gap: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const DownloadButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 12px;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  gap: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
