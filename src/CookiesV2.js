"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CookiesV2({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="cookie-popup_component" tag="div" fs-cc="banner">
      <_Builtin.Block className="cookie-modal_component" tag="div">
        <_Builtin.HtmlEmbed
          className="cookie-modal_styles"
          value="%3Cstyle%3E%0A%0A.ck-preference__scroll-w%3A%3A-webkit-scrollbar%20%7B%0A%09display%3A%20none%3B%0A%7D%20.ck-preference__scroll-w%20%7B%0A%20%20-ms-overflow-style%3A%20none%3B%20%0A%20%20scrollbar-width%3A%20none%3B%20%0A%7D%0A%0A%3C%2Fstyle%3E"
        />
        <_Builtin.Link
          className="cookie-modal_closebutton"
          button={false}
          fs-cc="close"
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className="cookie-modal_closebutton_line is-left"
            tag="div"
          />
          <_Builtin.Block
            className="cookie-modal_closebutton_line is-right"
            tag="div"
          />
          <_Builtin.Block className="screenreader-only" tag="div">
            {"Close Cookie Popup"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Block
          className="cookie-modal_content-wrap is-small"
          tag="div"
        >
          <_Builtin.Block className="cookie-modal_title is-small" tag="div">
            {"Cookie Settings"}
          </_Builtin.Block>
          <_Builtin.Block className="cookie-modal_description" tag="div">
            {
              "By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage and assist in our marketing efforts. "
            }
            <_Builtin.Link
              className="cookie-modal_link"
              button={false}
              block=""
              options={{
                href: "#",
                target: "_blank",
              }}
            >
              {"More info"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="cookie-modal_button-wrap is-small" tag="div">
          <_Builtin.Link
            className="cookie-modal_button"
            button={false}
            fs-cc="allow"
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block className="cookie-modal_button_text" tag="div">
              {"Accept All Cookies"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className="cookie-modal_button is-secondary"
            button={false}
            fs-cc="open-preferences"
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className="cookie-modal_button_text is--dark"
              tag="div"
            >
              {"Cookie Settings"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
