"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonFillDark({
  as: _Component = _Builtin.Link,
  buttonText = "Send message",

  buttonLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className="button is--fill-dark mobile-width"
      button={false}
      block="inline"
      options={buttonLink}
    >
      <_Builtin.Block className="button-text" tag="div">
        {buttonText}
      </_Builtin.Block>
    </_Component>
  );
}
