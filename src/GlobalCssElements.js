"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GlobalCssElements({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="global" tag="div">
      <_Builtin.HtmlEmbed
        className="html"
        value="%3Cstyle%3E%0A*%20%7B%0A%20%20-webkit-font-smoothing%3A%20antialiased%3B%0A%20%20-moz-osx-font-smoothing%3A%20grayscale%3B%0A%7D%0A%0A%40media%20only%20screen%20and%20(min-width%3A%201440px)%20%7B%0A%20%20%20%20%20body%20%7Bfont-size%3A%2014.4px%3B%7D%0A%7D%0A%0A.nav__menu-info%20.text__body%3Afirst-child%20%7B%0A%09margin-bottom%3A%201em%3B%0A%7D%0A%0Aa%20%7B%0A%09color%3A%20inherit%3B%0A%7D%0A%0A.text__link-underline%20%7B%0A%09background-color%3A%20currentColor%3B%0A%7D%0A%0A.text__link%20%7B%0A%09color%3A%20inherit%3B%0A%7D%0A%0A.footer__sub-links%20.text__link-wrapper%20%7B%0A%09margin-right%3A%201.5em%3B%0A%7D%0A%0A.text__link-wrapper.is--menu%20%3E%20.text__link%20%7B%0A%09font-weight%3A%20300%3B%0A%7D%0A%0A.button__wrapper%20.button%3Afirst-child%20%7B%0A%09margin-right%3A%201em%3B%0A%7D%0A%0A%2F*%20change%20css%20when%20browser%20width%20hits%20767px%20and%20below%20*%2F%0A%40media%20only%20screen%20and%20(max-width%3A%20767px)%20%7B%20%20%20%20%0A%20%20.button__wrapper%20.button%3Afirst-child%20%7B%0A%20%20%20%20margin-right%3A%200%3B%0A%20%20%20%20margin-bottom%3A%201.11em%0A%20%20%7D%0A%20%20.break%20%7B%0A%20%20%20%20-webkit-hyphens%3A%20auto%3B%0A%20%20%20%20-moz-hyphens%3A%20auto%3B%0A%20%20%20%20-ms-hyphens%3A%20auto%3B%0A%20%20%20%20hyphens%3A%20auto%3B%0A%20%20%7D%0A%7D%0A%0A%40media%20only%20screen%20and%20(max-width%3A%20478px)%20%7B%20%0A%09.footer__sub-links%20.text__link-wrapper%20%7B%0A%09margin-right%3A%200em%3B%0A%09%7D%0A%20%20%0A%20%20.fade-out%20%7Bopacity%3A0%3B%7D%0A%7D%0A%0A.explainer%20%7B%0A%09top%3A%20calc(50vh%20-%2020em)%3B%0A%7D%0A%0A.button.is--purple-icon%20%3E%20.button__icon%20%7B%0A%09color%3A%20%238193ff%3B%0A%7D%0A%0A.button.is--purple-icon%3Ahover%20%3E%20.button__icon%20%7B%0A%09color%3A%20%2300051f%3B%0A%7D%0A%0A.button.is--outline-dark.is--purple-icon%20%3E%20.button__icon%20%7B%0A%09color%3A%20%2300051f%3B%0A%7D%0A%0A.button.is--outline-dark.is--purple-icon%3Ahover%20%3E%20.button__icon%20%7B%0A%09color%3A%20%238193ff%3B%0A%7D%0A%0A%2F*%20add%20link%20hover%20to%20a%20tags%20in%20rich%20text%20elements%20*%2F%0A.w-richtext%20a%20%7B%0A%09text-decoration%3A%20underline%3B%0A%20%20opacity%3A%201%3B%0A%20%20transition%3A%20opacity%200.2s%20ease%3B%0A%7D%0A%0A.w-richtext%20a%3Ahover%20%7B%0A%20%20opacity%3A%200.4%3B%0A%7D%0A%0A%2F*%20Max%20Font%20Size%20*%2F%0A%40media%20screen%20and%20(min-width%3A1400px)%20%7B%0A%0A%7D%0Aimg%3A%3Aselection%2C%20svg%3A%3Aselection%20%7B%0A%09background%3A%20transparent%3B%0A%7D%0A%0A%2F*%20Link%20color%20inherits%20from%20parent%20font%20color%20%20*%2F%0Aa%20%7B%0A%09color%3A%20inherit%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.HtmlEmbed
        className="cms-blog-authors--child-order"
        id="w-node-_412a5d56-a84f-f06a-af23-8e4e02c0a818-3c298874"
        value="%3Cstyle%3E%0A%20%20%2F*%20Make%20each%20author%20render%20inline%20*%2F%0A%20%20.featured-blog-authors%20.w-dyn-item%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Insert%20%22%26%22%20before%20every%20author%20except%20the%20first%20*%2F%0A%20%20.featured-blog-authors%20.w-dyn-item%3Anot(%3Afirst-child)%20.featured-blog-author%3A%3Abefore%20%7B%0A%20%20%20%20content%3A%20%22%20%7C%20%22%3B%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
