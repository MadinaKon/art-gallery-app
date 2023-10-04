import Link from "next/link";
import styled from "styled-components";

export const Footer = styled.footer`
  color: papayawhip;
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 8px;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  color: white;
  background: #0085ff;
  z-index: 10;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
