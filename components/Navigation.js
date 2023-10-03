import React from "react";
import Link from "next/link";
import styled from "styled-components";

export const Footer = styled.footer`
  color: papayawhip;
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 8px;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  color: white;
  background: #0085ff;
  z-index: 10;
`;

export default function Navigation() {
  return (
    <Footer>
      <Ul>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces">Art pieces</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </Ul>
    </Footer>
  );
}
