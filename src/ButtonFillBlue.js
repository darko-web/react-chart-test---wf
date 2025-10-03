"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonFillBlue({
  as: _Component = _Builtin.Link,

  buttonLink = {
    href: "#",
  },

  buttonText = "Send message",
}) {
  return (
    <_Component
      className="button is--blue"
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
