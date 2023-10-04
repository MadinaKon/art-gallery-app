import React from "react";
import Navigation from "./Navigation/Navigation";
import styled from "styled-components";

const BoxForLogo = styled.div`
  background: black;
  display: inline;
  padding: 3rem;
  position: fixed;
  top: 250px;
  right: 2px;
  z-index: 11;
  width: 200px;
  height: 114px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  background: black;
  color: white;
  display: inline;
  padding: 2rem;
  margin: 1rem;
  text-align: center;
  position: fixed;
  z-index: 12;
  border: 3px solid white;
  width: 180px;
  height: 100px;
`;

export default function Layout({ children }) {
  return (
    <>
      <BoxForLogo>
        <Logo>art gallery app</Logo>
      </BoxForLogo>
      {children}
      <Navigation />
    </>
  );
}
