"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonWhite({
  as: _Component = _Builtin.Link,
  textLinkText = "Subscribe",
}) {
  return (
    <_Component
      className="button is--white"
      button={false}
      block="inline"
      options={{
        href: "https://builders-newsletter.beehiiv.com/subscribe",
        target: "_blank",
        preload: "none",
      }}
    >
      <_Builtin.Block className="text__link" tag="div">
        {textLinkText}
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className="button__icon is-m"
        value="%3Csvg%20width%3D%2216%22%20height%3D%2212%22%20viewBox%3D%220%200%2016%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.25%203L7.16795%206.9453C7.6718%207.2812%208.3282%207.2812%208.83205%206.9453L14.75%203M2.75%2011.25H13.25C14.0784%2011.25%2014.75%2010.5784%2014.75%209.75V2.25C14.75%201.42157%2014.0784%200.75%2013.25%200.75H2.75C1.92157%200.75%201.25%201.42157%201.25%202.25V9.75C1.25%2010.5784%201.92157%2011.25%202.75%2011.25Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
      />
    </_Component>
  );
}
