"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { NavbarMobile } from "./NavbarMobile";
import { Navbar } from "./Navbar";

export function NavbarMainWrap({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="navbar-main-wrap" tag="nav">
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%40media%20(max-width%3A%2078rem)%20%7B%0A.navbar.desktop%20%7Bdisplay%3Anone%3B%20%7D%0A.navbar.mobile%20%7Bdisplay%3Aflex%3B%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A%0A%3Cstyle%3E%0A.w-nav-overlay%20%7Bpadding-top%3A%200px%20!important%3B%20%7D%0A%7D%0A%3C%2Fstyle%3E" />
      <NavbarMobile />
      <Navbar />
    </_Component>
  );
}
