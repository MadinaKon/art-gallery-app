import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Spotlight</Link>
      </li>
      <li>
        <Link href="/art-pieces">Art pieces</Link>
      </li>
      <li>
        <Link href="/favorites">favorites</Link>
      </li>
    </ul>
  );
}
