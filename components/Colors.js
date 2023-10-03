import React from "react";
import styled from "styled-components";
// import { uid } from "uid";

const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export default function Colors({ colors }) {
  console.log("colors in component", colors);
  return (
    <ColorContainer>
      {colors.map((color, i) => (
        <div
          key={i}
          style={{
            backgroundColor: color,
            width: "12px",
            height: "12px",
            borderRadius: "50px",
          }}
        />
      ))}
    </ColorContainer>
  );
}
