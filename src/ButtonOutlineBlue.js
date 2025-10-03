"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonOutlineBlue({
  as: _Component = _Builtin.Link,
  buttonText = "Subscribe",

  buttonLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className="button is--outline-dark is--light mobile-width"
      button={false}
      id="company_link"
      block="inline"
      options={buttonLink}
    >
      <_Builtin.Block className="button-text" tag="div" id="company_link">
        {buttonText}
      </_Builtin.Block>
    </_Component>
  );
}
