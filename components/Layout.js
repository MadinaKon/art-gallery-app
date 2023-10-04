import React from "react";
import Navigation from "./Navigation/Navigation";
import styled from "styled-components";

const Logo = styled.div`
  background: black;
  color: white;
  display: inline;
  padding: 3rem;
  text-align: center;
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 11;
  border-style: solid, white;
`;

export default function Layout({ children }) {
  return (
    <>
      <Logo>art gallery app</Logo>

      {children}
      <Navigation />
    </>
  );
}
