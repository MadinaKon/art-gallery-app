import React from "react";
import Link from "next/link";
import { Footer, StyledUl, StyledLink } from "./Navigation.styled.js";

export default function Navigation() {
  return (
    <Footer>
      <StyledUl>
        <li>
          <StyledLink href="/">Spotlight</StyledLink>
        </li>
        <li>
          <StyledLink href="/art-pieces">Art pieces</StyledLink>
        </li>
        <li>
          <StyledLink href="/favorites">Favorites</StyledLink>
        </li>
      </StyledUl>
    </Footer>
  );
}
