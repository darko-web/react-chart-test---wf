"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-236":{"id":"e-236","name":"","animationType":"preset","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-237"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697814588131},"e-811":{"id":"e-811","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-250","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-812"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3f6d62cc-b4d0-0779-20ce-315ddc3787ce","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3f6d62cc-b4d0-0779-20ce-315ddc3787ce","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845231881},"e-812":{"id":"e-812","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-257","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-811"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3f6d62cc-b4d0-0779-20ce-315ddc3787ce","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3f6d62cc-b4d0-0779-20ce-315ddc3787ce","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666845231881},"e-1143":{"id":"e-1143","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-309","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1144"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d3d4f484-92a9-f847-ebfe-1a3d1fa1103d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d3d4f484-92a9-f847-ebfe-1a3d1fa1103d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1744139889549},"e-1144":{"id":"e-1144","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-310","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1143"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d3d4f484-92a9-f847-ebfe-1a3d1fa1103d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d3d4f484-92a9-f847-ebfe-1a3d1fa1103d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1744139889549}},"actionLists":{"a-34":{"id":"a-34","title":"page-loader__animation-simple","actionItemGroups":[{"actionItems":[{"id":"a-34-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".h1","selectorGuids":["6c6ee977-1935-2d7d-ae93-5860b574f4fc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-34-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67c5ba51ee54e5481cbd2942|811baadb-5e4d-d15b-bb87-5b44eeb9788c"},"value":1,"unit":""}},{"id":"a-34-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":1000,"target":{"id":"3f6d62cc-b4d0-0779-20ce-315ddc3787d3"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"outQuart","duration":800,"target":{"selector":".nav__brand.is--light.is--top","selectorGuids":["0cfb796c-bc58-2ee5-562b-cb7357c458cc","466517be-d744-a05c-20ef-616fd26dd4e9","7030bf09-7a31-258a-1bb2-cd39c36b64e2"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-34-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"outQuart","duration":1200,"target":{"id":"67c5ba51ee54e5481cbd2942|811baadb-5e4d-d15b-bb87-5b44eeb9788d"},"value":1,"unit":""}},{"id":"a-34-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"outQuart","duration":2000,"target":{"selector":".h1","selectorGuids":["6c6ee977-1935-2d7d-ae93-5860b574f4fc"]},"value":1,"unit":""}},{"id":"a-34-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":1500,"easing":"","duration":500,"target":{"id":"67c5ba51ee54e5481cbd2942|daf43904-fd40-d78e-e229-f34ba29c35fc"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1620829987877},"a-250":{"id":"a-250","title":"Navbar 5 [Open Menu]","actionItemGroups":[{"actionItems":[{"id":"a-250-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-middle","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903177"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-250-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-bottom","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903198"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-250-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-top","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de090317c"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-250-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-top","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de090317c"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-250-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-bottom","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903198"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-257":{"id":"a-257","title":"Navbar 5 [Close Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-257-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-bottom","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903198"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-257-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-top","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de090317c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-257-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-bottom","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903198"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-257-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-top","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de090317c"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-257-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-middle","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903177"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-309":{"id":"a-309","title":"Navbar 5 [Open Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-309-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-middle","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903177"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-309-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-bottom","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903198"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-309-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-top","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de090317c"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-309-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-top","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de090317c"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-309-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-bottom","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903198"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-310":{"id":"a-310","title":"Navbar 5 [Close Menu] 3","actionItemGroups":[{"actionItems":[{"id":"a-310-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-bottom","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903198"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-310-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-top","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de090317c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-310-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-bottom","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903198"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-310-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-top","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de090317c"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-310-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".rl_menu-icon_line-middle","selectorGuids":["161a6dd5-4aef-5e7f-e63c-6c2de0903177"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="navbar desktop"
      data-w-id="3f6d62cc-b4d0-0779-20ce-315ddc3787ce"
      tag="div"
      fs-scrolldisable-element="smart-nav"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 280,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block className="navbar-bg" tag="div" />
      <_Builtin.Block className="navbar-container" tag="div">
        <_Builtin.Link
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className="brand-logo-img"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67c98c8e3b4d4ed59c29fe50_builders%20studio%20logo%20white.svg"
          />
        </_Builtin.Link>
        <_Builtin.NavbarBrand
          className="brand-logo"
          data-w-id="3f6d62cc-b4d0-0779-20ce-315ddc3787d3"
          options={{
            href: "#",
          }}
        />
        <_Builtin.NavbarMenu
          className="navbar-menu"
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block className="rl_navbar5_menu-left" tag="div">
            <_Builtin.DropdownWrapper
              className="menu-item-with-link-1"
              tag="div"
              delay={300}
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="navbar-dropdown"
                tag="div"
                id="nav_footer_link"
              >
                <_Builtin.Block
                  className="navbar-link-ghost-text"
                  tag="div"
                  id="nav_footer_link"
                >
                  {"Studio"}
                </_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className="code-embed-15"
                  value="%3Csvg%20width%3D%2215%22%20height%3D%2214%22%20viewBox%3D%220%200%2015%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.46552%207.42529C4.55747%207.42529%207.07471%209.93103%207.07471%2013.0345V14H7.5H7.92529V13.0345C7.92529%209.94253%2010.431%207.42529%2013.5345%207.42529H14.5V7V6.57471H13.5345C10.4425%206.57471%207.92529%204.06896%207.92529%200.965516V0H7.5H7.07471V0.965516C7.07471%204.05747%204.56897%206.57471%201.46552%206.57471H0.5V7V7.42529H1.46552Z%22%20fill%3D%22url(%23paint0_linear_6706_28190)%22%2F%3E%0A%3Cpath%20d%3D%22M1.46552%207.42529C4.55747%207.42529%207.07471%209.93103%207.07471%2013.0345V14H7.5H7.92529V13.0345C7.92529%209.94253%2010.431%207.42529%2013.5345%207.42529H14.5V7V6.57471H13.5345C10.4425%206.57471%207.92529%204.06896%207.92529%200.965516V0H7.5H7.07471V0.965516C7.07471%204.05747%204.56897%206.57471%201.46552%206.57471H0.5V7V7.42529H1.46552Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_6706_28190%22%20x1%3D%225.50217%22%20y1%3D%228.58859%22%20x2%3D%226.70508%22%20y2%3D%22-4.91077%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23DACACD%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23currentColor%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="link-block-9"
                  button={false}
                  id="nav_footer_link"
                  block="inline"
                  options={{
                    href: "#",
                  }}
                />
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="rl_navbar5_dropdown-list _2nd"
                tag="nav"
              >
                <_Builtin.Block className="navbar-expand-content" tag="div">
                  <_Builtin.Block className="navbar-expand-r" tag="div">
                    <_Builtin.Block className="nav-expand-top" tag="div">
                      <_Builtin.Link
                        className="button_s_ghost-dropdown-link"
                        button={false}
                        id="nav_footer_link"
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block tag="div" id="nav_footer_link">
                          {"Overview"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="button_s_ghost-dropdown-link"
                        button={false}
                        id="nav_footer_link"
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block tag="div" id="nav_footer_link">
                          {"Build with us"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="button_s_ghost-dropdown-link"
                        button={false}
                        id="nav_footer_link"
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block tag="div" id="nav_footer_link">
                          {"Playbook"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="button_s_ghost-dropdown-link"
                        button={false}
                        id="nav_footer_link"
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block tag="div" id="nav_footer_link">
                          {"Companies"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="button_s_ghost-dropdown-link"
                        button={false}
                        id="nav_footer_link"
                        block="inline"
                        options={{
                          href: "https://www.builders.studio/team#founders",
                        }}
                      >
                        <_Builtin.Block tag="div" id="nav_footer_link">
                          {"Founders"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="button_s_ghost-dropdown-link"
                        button={false}
                        id="nav_footer_link"
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block tag="div" id="nav_footer_link">
                          {"Bootcamp"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.Block className="nav-expand-bottom" tag="div">
                      <_Builtin.Block
                        className="big-menu-category-title-wrap"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="big-menu-category-title"
                          tag="div"
                        >
                          {"Startup studio"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.57471%200.965518C6.57471%204.05747%204.06897%206.57471%200.965516%206.57471L-3.2457e-07%206.57471L-3.0598e-07%207L-2.8739e-07%207.42529L0.965516%207.42529C4.05747%207.42529%206.57471%209.93103%206.57471%2013.0345L6.57471%2014L7%2014L7.42529%2014L7.42529%2013.0345C7.42529%209.94253%209.93103%207.42529%2013.0345%207.42529L14%207.42529L14%207L14%206.57471L13.0345%206.57471C9.94253%206.57471%207.42529%204.06897%207.42529%200.965518L7.42529%20-6.23192e-07L7%20-6.04602e-07L6.57471%20-5.86013e-07L6.57471%200.965518Z%22%20fill%3D%22%238193FF%22%2F%3E%0A%3C%2Fsvg%3E" />
                      </_Builtin.Block>
                      <_Builtin.Paragraph className="is--color-white70">
                        {
                          "Partnering with talented entrepreneurs to build companies defining the future of work by harnessing the power of AI."
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="navbar-expand-l" tag="div">
                    <_Builtin.Block className="div-block-157" tag="div">
                      <_Builtin.Image
                        className="big-menu-main-img"
                        width="auto"
                        height="auto"
                        loading="lazy"
                        alt="Sharon Klaver, Estefania Hernandez, Michael van Lier, Dylan Moerland and Jelmer Peerbolte | Builders Studio"
                        src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67c989aaa461ae64e1842737_everday%20founders%20with%20builders%20MDs.avif"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className="menu-item-with-link-1"
              tag="div"
              delay={300}
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="navbar-dropdown"
                tag="div"
                id="nav_footer_link"
              >
                <_Builtin.Block
                  className="navbar-link-ghost-text"
                  tag="div"
                  id="nav_footer_link"
                >
                  {"Network"}
                </_Builtin.Block>
                <_Builtin.Link
                  className="link-block-9"
                  button={false}
                  id="nav_footer_link"
                  block="inline"
                  options={{
                    href: "#",
                  }}
                />
                <_Builtin.HtmlEmbed
                  className="code-embed-17"
                  value="%3Csvg%20width%3D%2211%22%20height%3D%2211%22%20viewBox%3D%220%200%2011%2011%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22display%3A%20block%3B%20margin%3A%200%3B%20padding%3A%200%3B%22%3E%0A%3Cpath%20d%3D%22M0.682725%201.28417C2.86907%203.47051%202.87719%207.0223%200.682724%209.21677L0%209.8995L0.601447%2010.5009L1.28417%209.81822C3.47051%207.63188%207.0223%207.62375%209.21677%209.81822L9.8995%2010.5009L10.5009%209.8995L9.81822%209.21677C7.63188%207.03043%207.62375%203.47864%209.81822%201.28417L10.5009%200.601449L9.8995%200L9.21677%200.682725C7.03043%202.86907%203.47864%202.87719%201.28417%200.682725L0.601448%200L0%200.601448L0.682725%201.28417Z%22%20fill%3D%22url(%23paint0_linear_6775_21782)%22%2F%3E%0A%3Cpath%20d%3D%22M0.682725%201.28417C2.86907%203.47051%202.87719%207.0223%200.682724%209.21677L0%209.8995L0.601447%2010.5009L1.28417%209.81822C3.47051%207.63188%207.0223%207.62375%209.21677%209.81822L9.8995%2010.5009L10.5009%209.8995L9.81822%209.21677C7.63188%207.03043%207.62375%203.47864%209.81822%201.28417L10.5009%200.601449L9.8995%200L9.21677%200.682725C7.03043%202.86907%203.47864%202.87719%201.28417%200.682725L0.601448%200L0%200.601448L0.682725%201.28417Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_6775_21782%22%20x1%3D%223.752%22%20y1%3D%226.44205%22%20x2%3D%224.65426%22%20y2%3D%22-3.68337%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22currentColor%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22currentColor%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="rl_navbar5_dropdown-list _2nd"
                tag="nav"
              >
                <_Builtin.Block className="navbar-expand-content" tag="div">
                  <_Builtin.Block className="navbar-expand-r" tag="div">
                    <_Builtin.Block className="nav-expand-top" tag="div">
                      <_Builtin.Link
                        className="button_s_ghost-dropdown-link"
                        button={false}
                        id="nav_footer_link"
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block tag="div" id="nav_footer_link">
                          {"CTO Network"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="button_s_ghost-dropdown-link"
                        button={false}
                        id="nav_footer_link"
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block tag="div" id="nav_footer_link">
                          {"Navigators Network"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.Block className="nav-expand-bottom" tag="div">
                      <_Builtin.Block
                        className="big-menu-category-title-wrap"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="big-menu-category-title"
                          tag="div"
                        >
                          {"Network"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="code-embed-17"
                          value="%3Csvg%20width%3D%2211%22%20height%3D%2211%22%20viewBox%3D%220%200%2011%2011%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22display%3A%20block%3B%20margin%3A%200%3B%20padding%3A%200%3B%22%3E%0A%3Cpath%20d%3D%22M0.682725%201.28417C2.86907%203.47051%202.87719%207.0223%200.682724%209.21677L0%209.8995L0.601447%2010.5009L1.28417%209.81822C3.47051%207.63188%207.0223%207.62375%209.21677%209.81822L9.8995%2010.5009L10.5009%209.8995L9.81822%209.21677C7.63188%207.03043%207.62375%203.47864%209.81822%201.28417L10.5009%200.601449L9.8995%200L9.21677%200.682725C7.03043%202.86907%203.47864%202.87719%201.28417%200.682725L0.601448%200L0%200.601448L0.682725%201.28417Z%22%20fill%3D%22url(%23paint0_linear_6775_21782)%22%2F%3E%0A%3Cpath%20d%3D%22M0.682725%201.28417C2.86907%203.47051%202.87719%207.0223%200.682724%209.21677L0%209.8995L0.601447%2010.5009L1.28417%209.81822C3.47051%207.63188%207.0223%207.62375%209.21677%209.81822L9.8995%2010.5009L10.5009%209.8995L9.81822%209.21677C7.63188%207.03043%207.62375%203.47864%209.81822%201.28417L10.5009%200.601449L9.8995%200L9.21677%200.682725C7.03043%202.86907%203.47864%202.87719%201.28417%200.682725L0.601448%200L0%200.601448L0.682725%201.28417Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_6775_21782%22%20x1%3D%223.752%22%20y1%3D%226.44205%22%20x2%3D%224.65426%22%20y2%3D%22-3.68337%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22currentColor%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22currentColor%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Paragraph className="is--color-white70">
                        {
                          "Connecting tech leaders. Leverage our platform and venture studio playbooks to craft solid connections."
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="navbar-expand-l" tag="div">
                    <_Builtin.Block className="div-block-157" tag="div">
                      <_Builtin.Image
                        className="big-menu-main-img"
                        width="auto"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67f7ab6f8d2a0c3524293bff_4C2A8106%201.avif"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className="menu-item-with-link-1"
              tag="div"
              delay={300}
              hover={true}
            >
              <_Builtin.DropdownToggle
                className="navbar-dropdown"
                tag="div"
                id="nav_footer_link"
              >
                <_Builtin.Block
                  className="navbar-link-ghost-text"
                  tag="div"
                  id="nav_footer_link"
                >
                  {"Capital"}
                </_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className="code-embed-16"
                  value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22display%3A%20block%3B%20margin%3A%200%3B%20padding%3A%200%3B%22%3E%0A%3Cpath%20d%3D%22M3.89554%208.25075C3.04218%207.72702%202.03845%207.42529%200.965518%207.42529H0V6.57471H0.965518C2.06717%206.57471%203.09351%206.25752%203.95918%205.71002C3.74596%204.67081%203.23627%203.6808%202.43134%202.87587L1.74862%202.19315L2.35007%201.5917L3.03279%202.27442C3.82496%203.0666%204.79401%203.57174%205.81185%203.79102C6.29695%202.96069%206.57471%201.99496%206.57471%200.965516V0H7.42529V0.965516C7.42529%201.99643%207.70305%202.96138%208.18738%203.79045C9.20608%203.57057%2010.175%203.06485%2010.9654%202.27442L11.6481%201.5917L12.2496%202.19315L11.5668%202.87587C10.7608%203.68192%2010.2519%204.67108%2010.039%205.70844C10.9063%206.25728%2011.934%206.57471%2013.0345%206.57471H14V7.42529H13.0345C11.9591%207.42529%2010.9556%207.72751%2010.1031%208.25114C10.3455%209.18867%2010.8337%2010.0753%2011.5668%2010.8085L12.2496%2011.4912L11.6481%2012.0926L10.9654%2011.4099C10.2184%2010.6629%209.31408%2010.1711%208.3599%209.93361C7.76916%2010.8225%207.42529%2011.8891%207.42529%2013.0345V14H6.57471V13.0345C6.57471%2011.8869%206.23054%2010.8211%205.6404%209.93346C4.6843%2010.1712%203.77901%2010.6637%203.03279%2011.4099L2.35007%2012.0926L1.74862%2011.4912L2.43134%2010.8085C3.16588%2010.0739%203.65364%209.18732%203.89554%208.25075Z%22%20fill%3D%22url(%23paint0_linear_6775_21781)%22%2F%3E%0A%3Cpath%20d%3D%22M3.89554%208.25075C3.04218%207.72702%202.03845%207.42529%200.965518%207.42529H0V6.57471H0.965518C2.06717%206.57471%203.09351%206.25752%203.95918%205.71002C3.74596%204.67081%203.23627%203.6808%202.43134%202.87587L1.74862%202.19315L2.35007%201.5917L3.03279%202.27442C3.82496%203.0666%204.79401%203.57174%205.81185%203.79102C6.29695%202.96069%206.57471%201.99496%206.57471%200.965516V0H7.42529V0.965516C7.42529%201.99643%207.70305%202.96138%208.18738%203.79045C9.20608%203.57057%2010.175%203.06485%2010.9654%202.27442L11.6481%201.5917L12.2496%202.19315L11.5668%202.87587C10.7608%203.68192%2010.2519%204.67108%2010.039%205.70844C10.9063%206.25728%2011.934%206.57471%2013.0345%206.57471H14V7.42529H13.0345C11.9591%207.42529%2010.9556%207.72751%2010.1031%208.25114C10.3455%209.18867%2010.8337%2010.0753%2011.5668%2010.8085L12.2496%2011.4912L11.6481%2012.0926L10.9654%2011.4099C10.2184%2010.6629%209.31408%2010.1711%208.3599%209.93361C7.76916%2010.8225%207.42529%2011.8891%207.42529%2013.0345V14H6.57471V13.0345C6.57471%2011.8869%206.23054%2010.8211%205.6404%209.93346C4.6843%2010.1712%203.77901%2010.6637%203.03279%2011.4099L2.35007%2012.0926L1.74862%2011.4912L2.43134%2010.8085C3.16588%2010.0739%203.65364%209.18732%203.89554%208.25075Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_6775_21781%22%20x1%3D%225.00217%22%20y1%3D%228.58859%22%20x2%3D%226.20508%22%20y2%3D%22-4.91077%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22currentColor%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22currentColor%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="link-block-9"
                  button={false}
                  id="nav_footer_link"
                  block="inline"
                  options={{
                    href: "#",
                  }}
                />
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className="rl_navbar5_dropdown-list _2nd"
                tag="nav"
              >
                <_Builtin.Block className="navbar-expand-content" tag="div">
                  <_Builtin.Block className="navbar-expand-r" tag="div">
                    <_Builtin.Block className="nav-expand-top" tag="div">
                      <_Builtin.Link
                        className="button_s_ghost-dropdown-link"
                        button={false}
                        id="nav_footer_link"
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block tag="div" id="nav_footer_link">
                          {"Builders Fund"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="button_s_ghost-dropdown-link"
                        button={false}
                        id="nav_footer_link"
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block tag="div" id="nav_footer_link">
                          {"Investor House"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.Block className="nav-expand-bottom" tag="div">
                      <_Builtin.Block
                        className="big-menu-category-title-wrap"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="big-menu-category-title"
                          tag="div"
                        >
                          {"Capital"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="code-embed-16"
                          value="%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22display%3A%20block%3B%20margin%3A%200%3B%20padding%3A%200%3B%22%3E%0A%3Cpath%20d%3D%22M3.89554%208.25075C3.04218%207.72702%202.03845%207.42529%200.965518%207.42529H0V6.57471H0.965518C2.06717%206.57471%203.09351%206.25752%203.95918%205.71002C3.74596%204.67081%203.23627%203.6808%202.43134%202.87587L1.74862%202.19315L2.35007%201.5917L3.03279%202.27442C3.82496%203.0666%204.79401%203.57174%205.81185%203.79102C6.29695%202.96069%206.57471%201.99496%206.57471%200.965516V0H7.42529V0.965516C7.42529%201.99643%207.70305%202.96138%208.18738%203.79045C9.20608%203.57057%2010.175%203.06485%2010.9654%202.27442L11.6481%201.5917L12.2496%202.19315L11.5668%202.87587C10.7608%203.68192%2010.2519%204.67108%2010.039%205.70844C10.9063%206.25728%2011.934%206.57471%2013.0345%206.57471H14V7.42529H13.0345C11.9591%207.42529%2010.9556%207.72751%2010.1031%208.25114C10.3455%209.18867%2010.8337%2010.0753%2011.5668%2010.8085L12.2496%2011.4912L11.6481%2012.0926L10.9654%2011.4099C10.2184%2010.6629%209.31408%2010.1711%208.3599%209.93361C7.76916%2010.8225%207.42529%2011.8891%207.42529%2013.0345V14H6.57471V13.0345C6.57471%2011.8869%206.23054%2010.8211%205.6404%209.93346C4.6843%2010.1712%203.77901%2010.6637%203.03279%2011.4099L2.35007%2012.0926L1.74862%2011.4912L2.43134%2010.8085C3.16588%2010.0739%203.65364%209.18732%203.89554%208.25075Z%22%20fill%3D%22url(%23paint0_linear_6775_21781)%22%2F%3E%0A%3Cpath%20d%3D%22M3.89554%208.25075C3.04218%207.72702%202.03845%207.42529%200.965518%207.42529H0V6.57471H0.965518C2.06717%206.57471%203.09351%206.25752%203.95918%205.71002C3.74596%204.67081%203.23627%203.6808%202.43134%202.87587L1.74862%202.19315L2.35007%201.5917L3.03279%202.27442C3.82496%203.0666%204.79401%203.57174%205.81185%203.79102C6.29695%202.96069%206.57471%201.99496%206.57471%200.965516V0H7.42529V0.965516C7.42529%201.99643%207.70305%202.96138%208.18738%203.79045C9.20608%203.57057%2010.175%203.06485%2010.9654%202.27442L11.6481%201.5917L12.2496%202.19315L11.5668%202.87587C10.7608%203.68192%2010.2519%204.67108%2010.039%205.70844C10.9063%206.25728%2011.934%206.57471%2013.0345%206.57471H14V7.42529H13.0345C11.9591%207.42529%2010.9556%207.72751%2010.1031%208.25114C10.3455%209.18867%2010.8337%2010.0753%2011.5668%2010.8085L12.2496%2011.4912L11.6481%2012.0926L10.9654%2011.4099C10.2184%2010.6629%209.31408%2010.1711%208.3599%209.93361C7.76916%2010.8225%207.42529%2011.8891%207.42529%2013.0345V14H6.57471V13.0345C6.57471%2011.8869%206.23054%2010.8211%205.6404%209.93346C4.6843%2010.1712%203.77901%2010.6637%203.03279%2011.4099L2.35007%2012.0926L1.74862%2011.4912L2.43134%2010.8085C3.16588%2010.0739%203.65364%209.18732%203.89554%208.25075Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_6775_21781%22%20x1%3D%225.00217%22%20y1%3D%228.58859%22%20x2%3D%226.20508%22%20y2%3D%22-4.91077%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22currentColor%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22currentColor%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Paragraph className="is--color-white70">
                        {
                          "Backing the bold. All-in with funding, expertise, and a platform designed to help founders succeed and redefine industries."
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="navbar-expand-l" tag="div">
                    <_Builtin.Block className="div-block-157" tag="div">
                      <_Builtin.Image
                        className="big-menu-main-img"
                        width="auto"
                        height="auto"
                        loading="lazy"
                        alt="Michael van Lier and Erik Carbijn at Builders Investor House at AWS"
                        src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67df063abf3d6c90d658334a_Frame%202147224292.avif"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
          </_Builtin.Block>
          <_Builtin.Block className="rl_navbar5_menu-right" tag="div">
            <_Builtin.Link
              className="navbar_link-main-right"
              button={false}
              id="nav_footer_link"
              block="inline"
              options={{
                href: "#",
                preload: "none",
              }}
            >
              <_Builtin.Block
                className="text-link-nav"
                tag="div"
                id="nav_footer_link"
              >
                {"Blog"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="navbar_link-main-right"
              button={false}
              id="nav_footer_link"
              block="inline"
              options={{
                href: "#",
                preload: "none",
              }}
            >
              <_Builtin.Block
                className="text-link-nav"
                tag="div"
                id="nav_footer_link"
              >
                {"Team"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="navbar_link-main hide"
              button={false}
              id="nav_footer_link"
              block="inline"
              options={{
                href: "#",
                preload: "none",
              }}
            >
              <_Builtin.Block
                className="text-link-nav"
                tag="div"
                id="nav_footer_link"
              >
                {"Careers"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="navbar_link-main-right"
              button={false}
              id="nav_footer_link"
              block="inline"
              options={{
                href: "#",
                preload: "none",
              }}
            >
              <_Builtin.Block
                className="text-link-nav"
                tag="div"
                id="nav_footer_link"
              >
                {"Contact"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Block className="navbar-main-cta-wrap" tag="div">
              <_Builtin.Link
                className="button_m_capital_outline_ghost"
                button={false}
                id="main-cta-nav"
                block="inline"
                options={{
                  href: "https://careers.builders.studio/o/become-a-founder",
                }}
              >
                <_Builtin.Block
                  className="main-button-txt"
                  tag="div"
                  id="main-cta-nav"
                >
                  {"Become a founder ↗"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton className="rl_navbar5_menu-button" tag="div">
          <_Builtin.Block className="rl_menu-icon" tag="div">
            <_Builtin.Block className="rl_menu-icon_line-top" tag="div" />
            <_Builtin.Block className="rl_menu-icon_line-middle" tag="div">
              <_Builtin.Block
                className="rl_menu-icon_line-middle-inner-2"
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block className="rl_menu-icon_line-bottom" tag="div" />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
