"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonOutlineIconBlue({
  as: _Component = _Builtin.Link,
  buttonText = "Contact on LinkedIn",

  buttonLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className="button is--outline-dark is--light mobile-width"
      button={false}
      block="inline"
      options={buttonLink}
    >
      <_Builtin.Block className="button-text" tag="div">
        {buttonText}
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className="button__icon"
        value="%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.58579%202H0V0H12V12H10V3.41421L1.41421%2012L0%2010.5858L8.58579%202Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
      />
    </_Component>
  );
}
