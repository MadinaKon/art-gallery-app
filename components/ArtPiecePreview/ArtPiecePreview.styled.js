import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 90px;
`;

export const StyledContainer = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  padding-left: 20px;
  margin-left: 0;
  align-items: center;
  top: 0px;
  width: 100%;
  height: 80px;
  color: white;
  background: rgba(0, 100, 255, 0.8);
  z-index: 10;
`;
//background: #0085ff;
//0, 133, 255
//background: rgba(#0085ff, 0.8);
