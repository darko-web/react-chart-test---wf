"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonOutlineDark({
  as: _Component = _Builtin.Link,
  buttonText = "Subscribe",

  buttonLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className="button is--outline align-center"
      button={false}
      block="inline"
      options={buttonLink}
    >
      <_Builtin.Block className="text__link" tag="div">
        {buttonText}
      </_Builtin.Block>
    </_Component>
  );
}
