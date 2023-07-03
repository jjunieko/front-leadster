import styled from 'styled-components';
import Image from 'next/image';

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export  const StyledImage = styled(Image)`
  width: 120px; 
  height: 30px;
`;


export const CustomContainerVideos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 150px;
  margin-left: 150px;
`;
