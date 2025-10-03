"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CookiesV2 } from "./CookiesV2";
import { CookiesV2PreferenceManager } from "./CookiesV2PreferenceManager";

export function CookiesV2WrapComponent({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="new-cookies" tag="div">
      <CookiesV2 />
      <CookiesV2PreferenceManager />
      <_Builtin.Link
        className="cookie-preference-button"
        button={false}
        fs-cc="manager"
        block="inline"
        options={{
          href: "#",
        }}
      >
        <_Builtin.Block
          className="cookie-preference-button_flex"
          tag="div"
          fs-cc="open-preferences"
        >
          <_Builtin.Image
            className="cookie-preference-button_icon"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/6603fbcb8ebe289b223bd552_ck__cookie.svg"
          />
          <_Builtin.Block className="cookie-preference-button_text" tag="div">
            {"Cookies Preferences"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  );
}
