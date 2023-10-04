import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  position: relative;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  list-style-type: none;
`;

export const StyledContainer = styled.div`
  margin-bottom: 100px;
`;

export const StyledBackButton = styled.button`
  position: absolute;
  padding: 0.5rem;
  background: rgba(0, 100, 255, 0.8);
  color: white;
  top: 20px;
  left: 50px;
  &:hover {
    background: rgba(0, 100, 800, 1);
    box-shadow: 2px 2px 4px grey;
  }
`;
//#0085ff
