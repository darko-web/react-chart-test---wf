"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Footer } from "./Footer";

export function FooterWrap({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="footer-wrapper" tag="div">
      <_Builtin.Block className="spacer" tag="div" />
      <Footer />
    </_Component>
  );
}
