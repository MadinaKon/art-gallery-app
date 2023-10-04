import styled from "styled-components";
import Image from "next/image";

// export const StyledDiv = styled.section`
//   display: flex;
//   position: relative;
//   padding: 10px;
//   margin-bottom: 40px;
//   flex-direction: column;
//   align-items: center;
// `;

export const StyledDiv = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-bottom: 150px;
  margin-top: 14px;
`;

export const StyledImage = styled(Image)`
  width: 500px;
  height: 500px;
`;

export const StyledParagraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
