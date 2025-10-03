"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Quote({
  as: _Component = _Builtin.Block,
  quote = "Build better. Launch early. Grow faster.",
  quoteName = "Michael van Lier",
  quoteFunction = "Managing Director",
}) {
  return (
    <_Component className="quote" tag="div" data-aos="fade-up">
      <_Builtin.Heading className="heading__large" tag="h2">
        {quote}
      </_Builtin.Heading>
      <_Builtin.Block className="quote__meta-wrapper" tag="div">
        <_Builtin.Paragraph className="quote__meta-name">
          {quoteName}
        </_Builtin.Paragraph>
        <_Builtin.Block className="quote__meta-divider" tag="div" />
        <_Builtin.Paragraph className="quote__meta-function">
          {quoteFunction}
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
