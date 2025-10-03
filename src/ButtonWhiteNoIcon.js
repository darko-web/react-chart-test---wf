"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonWhiteNoIcon({
  as: _Component = _Builtin.Link,
  textLinkText = "Apply as a founder->",
}) {
  return (
    <_Component
      className="button is--white"
      button={false}
      id="main-cta"
      block="inline"
      options={{
        href: "#",
      }}
    >
      <_Builtin.Block className="text__link" tag="div" id="main-cta">
        {textLinkText}
      </_Builtin.Block>
    </_Component>
  );
}
