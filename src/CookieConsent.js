"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CookieConsent({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="dialog" tag="div" fs-cc="banner">
      <_Builtin.Heading className="dialog__heading" tag="h3">
        {"Cookies"}
      </_Builtin.Heading>
      <_Builtin.Paragraph className="dialog__p">
        {
          "We use cookies to make your visit to www.builders.studio even easier and more personal."
        }
      </_Builtin.Paragraph>
      <_Builtin.Link
        className="dialog__link"
        button={false}
        block=""
        options={{
          href: "#",
          preload: "none",
        }}
      >
        {
          "To find out more about the cookies we use, have a look at our Privacy Policy."
        }
      </_Builtin.Link>
      <_Builtin.Block className="button__wrapper" tag="div">
        <_Builtin.Link
          className="button is--dialog white vertical-mobile"
          button={false}
          fs-cc="allow"
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block className="text__link" tag="div">
            {"Accept"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className="button is--dialog is--decline white"
          button={false}
          fs-cc="deny"
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block className="text__link" tag="div">
            {"Decline"}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
