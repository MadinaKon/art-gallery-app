import React from "react";
import Link from "next/link";
import { Footer, StyledUl } from "./Navigation.styled.js";

export default function Navigation() {
  return (
    <Footer>
      <StyledUl>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces">Art pieces</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </StyledUl>
    </Footer>
  );
}
