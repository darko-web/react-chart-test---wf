"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-312"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"},"targets":[{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1618828770164},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-317"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"},"targets":[{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1618828770166},"e-990":{"id":"e-990","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-304","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-991"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6780d8fc2af07f417e412f3e|bc228096-2048-4302-ea8f-252d6e203c00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6780d8fc2af07f417e412f3e|bc228096-2048-4302-ea8f-252d6e203c00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1741954433916},"e-1093":{"id":"e-1093","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-302","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1094"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba2bd4cd-58ce-67ef-1e19-098785a94ac9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba2bd4cd-58ce-67ef-1e19-098785a94ac9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1742157767229},"e-1147":{"id":"e-1147","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-311","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1148"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ba2bd4cd-58ce-67ef-1e19-098785a94a20","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ba2bd4cd-58ce-67ef-1e19-098785a94a20","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1744275275448}},"actionLists":{"a":{"id":"a","title":"text__link-wrapper-over","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1618828773957},"a-2":{"id":"a-2","title":"text__link-wrapper-out","actionItemGroups":[{"actionItems":[{"id":"a-2-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-2-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"outQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1618828773957},"a-304":{"id":"a-304","title":"Gradient Animation blog","actionItemGroups":[{"actionItems":[{"id":"a-304-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".blue1-crayola-2","selectorGuids":["712873eb-05ba-abbf-23c4-abe4320123a1"]},"zValue":-180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-304-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".main-shapes-wrapper.top","selectorGuids":["aa643272-e186-9338-64e2-8736165688c7","a3a2c7d5-a694-af2c-be94-1336b09b4f12"]},"yValue":-80,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-304-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".blue1-crayola-2","selectorGuids":["712873eb-05ba-abbf-23c4-abe4320123a1"]},"xValue":0,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-304-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":10000,"target":{"useEventTarget":"CHILDREN","selector":".blue1-crayola-2","selectorGuids":["712873eb-05ba-abbf-23c4-abe4320123a1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-304-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".main-shapes-wrapper.top","selectorGuids":["aa643272-e186-9338-64e2-8736165688c7","a3a2c7d5-a694-af2c-be94-1336b09b4f12"]},"yValue":5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-304-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":10000,"target":{"useEventTarget":"CHILDREN","selector":".blue1-crayola-2","selectorGuids":["712873eb-05ba-abbf-23c4-abe4320123a1"]},"xValue":24,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-304-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":10000,"target":{"useEventTarget":"CHILDREN","selector":".blue1-crayola-2","selectorGuids":["712873eb-05ba-abbf-23c4-abe4320123a1"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-304-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":10000,"target":{"useEventTarget":"CHILDREN","selector":".blue1-crayola-2","selectorGuids":["712873eb-05ba-abbf-23c4-abe4320123a1"]},"xValue":0,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-304-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".blue1-crayola-2","selectorGuids":["712873eb-05ba-abbf-23c4-abe4320123a1"]},"zValue":-180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-304-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".blue1-crayola-2","selectorGuids":["712873eb-05ba-abbf-23c4-abe4320123a1"]},"xValue":0,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665137535236},"a-302":{"id":"a-302","title":"Gradient Animation 7","actionItemGroups":[{"actionItems":[{"id":"a-302-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{},"zValue":-180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-302-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-302-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":10000,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-302-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":10000,"target":{},"xValue":24,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-302-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":10000,"target":{},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-302-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":10000,"target":{},"xValue":0,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-302-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":0,"target":{},"zValue":-180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-302-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665137535236},"a-311":{"id":"a-311","title":"spark rotation","actionItemGroups":[{"actionItems":[{"id":"a-311-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":22000,"target":{"id":"ba2bd4cd-58ce-67ef-1e19-098785a94a55"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-311-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":20000,"target":{"id":"ba2bd4cd-58ce-67ef-1e19-098785a94a55"},"zValue":360,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-311-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":0,"target":{"id":"ba2bd4cd-58ce-67ef-1e19-098785a94a55"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1744274610309}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function WhiteFooterWMarquee({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="footer-w-marquee-white"
      data-w-id="ba2bd4cd-58ce-67ef-1e19-098785a94a20"
      tag="div"
    >
      <_Builtin.Block className="section-100-w footer" tag="section">
        <_Builtin.Block className="showcase_marquee_wrapper" tag="div">
          <_Builtin.Block className="showcase_marquee_track" tag="div">
            <_Builtin.Block className="showcase_marquee_list" tag="div">
              <_Builtin.Block className="showcase_marquee_flex" tag="div">
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="showcase_marquee_list" tag="div">
              <_Builtin.Block className="showcase_marquee_flex" tag="div">
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Link
                  className="h2link is--color-dark"
                  button={false}
                  id="marquee-click"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"call for founders"}
                </_Builtin.Link>
                <_Builtin.HtmlEmbed
                  className="marquee-icon"
                  value="%3Csvg%20width%3D%2229%22%20height%3D%2228%22%20viewBox%3D%220%200%2029%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.774902%2023.2464L17.7669%206.20644L7.0149%206.35044V0.398438H28.0869L28.0389%2021.4704L22.0869%2021.4224L22.2309%2010.7184L5.2389%2027.7104L0.774902%2023.2464Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="footer-white" tag="footer">
        <_Builtin.Block className="ftr-main-wrap" tag="div">
          <_Builtin.Block className="footer-container" tag="div">
            <_Builtin.Block className="footer__content-wrapper" tag="div">
              <_Builtin.Block className="footer_content-left-min" tag="div">
                <_Builtin.Block className="footer_content_left-top" tag="div">
                  <_Builtin.Block className="footer__nav-wrapper" tag="div">
                    <_Builtin.Block
                      className="nav__menu-list is--footer"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="footer-category-wrap"
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          data-w-id="ba2bd4cd-58ce-67ef-1e19-098785a94a55"
                          value="%3Csvg%20width%3D%2241%22%20height%3D%2241%22%20viewBox%3D%220%200%2041%2041%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22display%3A%20block%3B%20margin%3A%200%3B%20padding%3A%200%3B%22%3E%0A%20%20%3Cpath%20d%3D%22M37.9017%2019.2567C28.9109%2019.2567%2021.5913%2011.9176%2021.5913%202.8279V0H20.3546H19.118V2.8279C19.118%2011.8839%2011.8317%2019.2567%202.80753%2019.2567H0V20.5023V21.7479H2.80753C11.7983%2021.7479%2019.118%2029.087%2019.118%2038.1767V41.0046H20.3546H21.5913V38.1767C21.5913%2029.1207%2028.8775%2021.7479%2037.9017%2021.7479H40.7092V20.5023V19.2567H37.9017Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="footer_content-left" tag="div">
                <_Builtin.Block className="footer_content_left-top" tag="div">
                  <_Builtin.Block className="div-block-195" tag="div">
                    <_Builtin.Block className="footer__nav-wrapper" tag="div">
                      <_Builtin.Block
                        className="nav__menu-list is--footer"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="footer-category-wrap"
                          tag="div"
                        >
                          <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.10345%208.48604C4.63711%208.48604%207.51396%2011.3498%207.51396%2014.8966L7.51396%2016L8%2016L8.48604%2016L8.48604%2014.8966C8.48604%2011.3629%2011.3498%208.48604%2014.8966%208.48604L16%208.48604L16%208L16%207.51396L14.8966%207.51396C11.3629%207.51396%208.48604%204.65025%208.48604%201.10345L8.48604%201.02365e-06L8%201.06614e-06L7.51396%201.10863e-06L7.51396%201.10345C7.51396%204.63711%204.65025%207.51396%201.10345%207.51396L-5.64596e-07%207.51396L-5.22105e-07%208L-4.79614e-07%208.48604L1.10345%208.48604Z%22%20fill%3D%22%23606CAF%22%2F%3E%0A%3C%2Fsvg%3E" />
                          <_Builtin.Link
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Paragraph className="footer-category is--color-dark">
                              {"studio"}
                            </_Builtin.Paragraph>
                          </_Builtin.Link>
                        </_Builtin.Block>
                        <_Builtin.Link
                          className="text__link-wrapper is--menu"
                          button={false}
                          id="nav_footer_link"
                          block="inline"
                          options={{
                            href: "#",
                            preload: "none",
                          }}
                        >
                          <_Builtin.Block
                            className="text__link is--footer is--color-dark"
                            tag="div"
                            id="nav_footer_link"
                          >
                            {"Build with us"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="text__link-underline is--menu is--bg-black"
                            tag="div"
                          />
                        </_Builtin.Link>
                        <_Builtin.Link
                          className="text__link-wrapper is--menu"
                          button={false}
                          id="nav_footer_link"
                          block="inline"
                          options={{
                            href: "#",
                            preload: "none",
                          }}
                        >
                          <_Builtin.Block
                            className="text__link is--footer is--color-dark"
                            tag="div"
                            id="nav_footer_link"
                          >
                            {"Playbook"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="text__link-underline is--menu is--bg-black"
                            tag="div"
                          />
                        </_Builtin.Link>
                        <_Builtin.Link
                          className="text__link-wrapper is--menu"
                          button={false}
                          id="nav_footer_link"
                          block="inline"
                          options={{
                            href: "#",
                            preload: "none",
                          }}
                        >
                          <_Builtin.Block
                            className="text__link is--footer is--color-dark"
                            tag="div"
                            id="nav_footer_link"
                          >
                            {"Companies"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="text__link-underline is--menu is--bg-black"
                            tag="div"
                          />
                        </_Builtin.Link>
                        <_Builtin.Link
                          className="text__link-wrapper is--menu"
                          button={false}
                          id="nav_footer_link"
                          block="inline"
                          options={{
                            href: "https://www.builders.studio/team#founders",
                          }}
                        >
                          <_Builtin.Block
                            className="text__link is--footer is--color-dark"
                            tag="div"
                            id="nav_footer_link"
                          >
                            {"Founders"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="text__link-underline is--menu is--bg-black"
                            tag="div"
                          />
                        </_Builtin.Link>
                        <_Builtin.Link
                          className="text__link-wrapper is--menu"
                          button={false}
                          id="nav_footer_link"
                          block="inline"
                          options={{
                            href: "#",
                            preload: "none",
                          }}
                        >
                          <_Builtin.Block
                            className="text__link is--footer is--color-dark"
                            tag="div"
                            id="nav_footer_link"
                          >
                            {"Team"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="text__link-underline is--menu is--bg-black"
                            tag="div"
                          />
                        </_Builtin.Link>
                        <_Builtin.Link
                          className="text__link-wrapper is--menu"
                          button={false}
                          id="nav_footer_link"
                          block="inline"
                          options={{
                            href: "#",
                            preload: "none",
                          }}
                        >
                          <_Builtin.Block
                            className="text__link is--footer is--color-dark"
                            tag="div"
                            id="nav_footer_link"
                          >
                            {"Bootcamp"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="text__link-underline is--menu is--bg-black"
                            tag="div"
                          />
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block className="footer__nav-wrapper" tag="div">
                      <_Builtin.Block
                        className="nav__menu-list is--footer"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="footer-category-wrap"
                          tag="div"
                        >
                          <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_6932_24509)%22%3E%0A%3Cpath%20d%3D%22M2.52972%203.21588C5.02839%205.71455%205.03768%209.77374%202.52972%2012.2817L1.74946%2013.062L2.09315%2013.4056L2.43683%2013.7493L3.21709%2012.9691C5.71576%2010.4704%209.77495%2010.4611%2012.2829%2012.9691L13.0632%2013.7493L13.4069%2013.4056L13.7505%2013.062L12.9703%2012.2817C10.4716%209.78303%2010.4623%205.72384%2012.9703%203.21588L13.7505%202.43562L13.4069%202.09194L13.0632%201.74825L12.2829%202.52851C9.78424%205.02718%205.72505%205.03647%203.21709%202.52851L2.43683%201.74825L2.09315%202.09194L1.74946%202.43562L2.52972%203.21588Z%22%20fill%3D%22%23E986B4%22%2F%3E%0A%3Cpath%20d%3D%22M2.52972%203.21588C5.02839%205.71455%205.03768%209.77374%202.52972%2012.2817L1.74946%2013.062L2.09315%2013.4056L2.43683%2013.7493L3.21709%2012.9691C5.71576%2010.4704%209.77495%2010.4611%2012.2829%2012.9691L13.0632%2013.7493L13.4069%2013.4056L13.7505%2013.062L12.9703%2012.2817C10.4716%209.78303%2010.4623%205.72384%2012.9703%203.21588L13.7505%202.43562L13.4069%202.09194L13.0632%201.74825L12.2829%202.52851C9.78424%205.02718%205.72505%205.03647%203.21709%202.52851L2.43683%201.74825L2.09315%202.09194L1.74946%202.43562L2.52972%203.21588Z%22%20fill%3D%22%23E986B4%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_6932_24509%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E" />
                          <_Builtin.Link
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Paragraph className="footer-category is--color-dark">
                              {"NETWORK"}
                            </_Builtin.Paragraph>
                          </_Builtin.Link>
                        </_Builtin.Block>
                        <_Builtin.Link
                          className="text__link-wrapper is--menu"
                          button={false}
                          id="nav_footer_link"
                          block="inline"
                          options={{
                            href: "#",
                            preload: "none",
                          }}
                        >
                          <_Builtin.Block
                            className="text__link is--footer is--color-dark"
                            tag="div"
                            id="nav_footer_link"
                          >
                            {"CTONetwork"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="text__link-underline is--menu is--bg-black"
                            tag="div"
                          />
                        </_Builtin.Link>
                        <_Builtin.Link
                          className="text__link-wrapper is--menu innactive hide"
                          button={false}
                          id="nav_footer_link"
                          block="inline"
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block
                            className="text__link is--footer innactive"
                            tag="div"
                            id="nav_footer_link"
                          >
                            {"Our Story"}
                            <br />
                            {"‍"}
                            <_Builtin.Span className="link-span">
                              {"(coming soon)"}
                            </_Builtin.Span>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="text__link-underline is--menu"
                            tag="div"
                          />
                        </_Builtin.Link>
                        <_Builtin.Link
                          className="text__link-wrapper is--menu"
                          button={false}
                          id="nav_footer_link"
                          block="inline"
                          options={{
                            href: "#",
                            preload: "none",
                          }}
                        >
                          <_Builtin.Block
                            className="text__link is--footer is--color-dark"
                            tag="div"
                            id="nav_footer_link"
                          >
                            {"Navigators"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="text__link-underline is--menu is--bg-black"
                            tag="div"
                          />
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="nav__menu-list is--footer"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="footer-category-wrap"
                          tag="div"
                        >
                          <_Builtin.HtmlEmbed value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.45211%209.42947C3.47683%208.83089%202.32969%208.48604%201.10345%208.48604H0V8V7.51396H1.10345C2.36241%207.51396%203.5353%207.15149%204.52461%206.52585C4.28086%205.33835%203.69839%204.2071%202.7786%203.28731L1.99835%202.50705L2.34203%202.16337L2.68572%201.81968L3.46597%202.59994C4.37125%203.50521%205.47864%204.08251%206.6418%204.33314C7.1964%203.38406%207.51396%202.28017%207.51396%201.10345V0H8H8.48604V1.10345C8.48604%202.28184%208.8036%203.38484%209.35731%204.33245C10.5214%204.08112%2011.6286%203.50318%2012.5318%202.59994L13.3121%201.81968L13.6557%202.16337L13.9994%202.50705L13.2192%203.28731C12.2981%204.20835%2011.7166%205.33861%2011.4732%206.52396C12.4644%207.15119%2013.6389%207.51396%2014.8966%207.51396H16V8V8.48604H14.8966C13.6675%208.48604%2012.5205%208.83148%2011.5462%209.43C11.8232%2010.5016%2012.3812%2011.5151%2013.2192%2012.3531L13.9994%2013.1334L13.6557%2013.4771L13.3121%2013.8208L12.5318%2013.0405C11.678%2012.1867%2010.6444%2011.6246%209.55382%2011.3532C8.8789%2012.369%208.48604%2013.5877%208.48604%2014.8966V16H8H7.51396V14.8966C7.51396%2013.5853%207.12074%2012.3674%206.4465%2011.353C5.35367%2011.6247%204.3189%2012.1876%203.46597%2013.0405L2.68571%2013.8208L2.34203%2013.4771L1.99835%2013.1334L2.7786%2012.3531C3.61822%2011.5135%204.17571%2010.5%204.45211%209.42947Z%22%20fill%3D%22%23F1DAC4%22%2F%3E%0A%3C%2Fsvg%3E" />
                          <_Builtin.Link
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Paragraph className="footer-category is--color-dark">
                              {"Capital"}
                            </_Builtin.Paragraph>
                          </_Builtin.Link>
                        </_Builtin.Block>
                        <_Builtin.Link
                          className="text__link-wrapper is--menu"
                          button={false}
                          id="nav_footer_link"
                          block="inline"
                          options={{
                            href: "#",
                            preload: "none",
                          }}
                        >
                          <_Builtin.Block
                            className="text__link is--footer is--color-dark"
                            tag="div"
                            id="nav_footer_link"
                          >
                            {"Builders Fund"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="text__link-underline is--menu is--bg-black"
                            tag="div"
                          />
                        </_Builtin.Link>
                        <_Builtin.Link
                          className="text__link-wrapper is--menu"
                          button={false}
                          id="nav_footer_link"
                          block="inline"
                          options={{
                            href: "#",
                            preload: "none",
                          }}
                        >
                          <_Builtin.Block
                            className="text__link is--footer is--color-dark"
                            tag="div"
                            id="nav_footer_link"
                          >
                            {"Investor House"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="text__link-underline is--menu is--bg-black"
                            tag="div"
                          />
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="nav__menu-list is--footer is-third"
                    tag="div"
                  >
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer is--color-dark"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Blog"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu is--bg-black"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer is--color-dark"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Careers"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu is--bg-black"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer is--color-dark"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Contact"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu is--bg-black"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "https://www.youtube.com/@playpod_",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer is--color-dark"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Podcast ↗"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu is--bg-black"
                        tag="div"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="text__link-wrapper is--menu"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "https://builders-newsletter.beehiiv.com/subscribe",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer is--color-dark"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Newsletter ↗"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu is--bg-black"
                        tag="div"
                      />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="div-block-190" tag="div">
                  <_Builtin.Block className="contact-logos" tag="div">
                    <_Builtin.HtmlEmbed
                      className="code-embed-24"
                      value="%3Cstyle%3E%0A%20%20.tooltip%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20background-color%3A%20rgba(255%2C%20255%2C%20255%2C%200.2)%3B%0A%20%20%20%20color%3A%20inherit%3B%0A%20%20%20%20padding%3A%208px%2012px%3B%0A%20%20%20%20border-radius%3A%208px%3B%0A%20%20%20%20font-size%3A%20inherit%3B%0A%20%20%20%20visibility%3A%20hidden%3B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20transition%3A%20opacity%200.3s%3B%0A%20%20%20%20z-index%3A%2010%3B%0A%20%20%20%20white-space%3A%20nowrap%3B%0A%20%20%7D%0A%0A%20%20.tooltip-above%20%7B%0A%20%20%20%20top%3A%20-4rem%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20transform%3A%20translateX(-50%25)%3B%0A%20%20%7D%0A%0A%20%20.tooltip-below%20%7B%0A%20%20%20%20top%3A%204rem%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20transform%3A%20translateX(-50%25)%3B%0A%20%20%7D%0A%0A%20%20.copy-on-click-link%2C%0A%20%20.email-link-icon24%20%7B%0A%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20display%3A%20inline-block%3B%0A%20%20%7D%0A%0A%20%20.copy-on-click-link%3Ahover%20.tooltip.hover-tooltip%2C%0A%20%20.email-link-icon24%3Ahover%20.tooltip.hover-tooltip%20%7B%0A%20%20%20%20visibility%3A%20visible%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Cscript%3E%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20function%20()%20%7B%0A%20%20%20%20function%20handleCopy(link%2C%20textSelector%2C%20tooltipPosition)%20%7B%0A%20%20%20%20%20%20%2F%2F%20Hover%20tooltip%0A%20%20%20%20%20%20const%20hoverTooltip%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20%20%20hoverTooltip.classList.add(%22tooltip%22%2C%20tooltipPosition%2C%20%22hover-tooltip%22)%3B%0A%20%20%20%20%20%20hoverTooltip.innerText%20%3D%20%22Click%20to%20copy%20email%20address%22%3B%0A%20%20%20%20%20%20link.appendChild(hoverTooltip)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Click%20tooltip%0A%20%20%20%20%20%20const%20clickTooltip%20%3D%20document.createElement(%22div%22)%3B%0A%20%20%20%20%20%20clickTooltip.classList.add(%22tooltip%22%2C%20tooltipPosition%2C%20%22click-tooltip%22)%3B%0A%20%20%20%20%20%20clickTooltip.innerText%20%3D%20%22Email%20copied!%22%3B%0A%20%20%20%20%20%20link.appendChild(clickTooltip)%3B%0A%0A%20%20%20%20%20%20link.addEventListener(%22click%22%2C%20function%20(event)%20%7B%0A%20%20%20%20%20%20%20%20event.preventDefault()%3B%0A%20%20%20%20%20%20%20%20const%20textToCopy%20%3D%20this.querySelector(textSelector).innerText%3B%0A%0A%20%20%20%20%20%20%20%20navigator.clipboard.writeText(textToCopy).then(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20clickTooltip.style.visibility%20%3D%20%22visible%22%3B%0A%20%20%20%20%20%20%20%20%20%20clickTooltip.style.opacity%20%3D%20%221%22%3B%0A%20%20%20%20%20%20%20%20%20%20hoverTooltip.style.visibility%20%3D%20%22hidden%22%3B%0A%20%20%20%20%20%20%20%20%20%20hoverTooltip.style.opacity%20%3D%20%220%22%3B%0A%0A%20%20%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20clickTooltip.style.visibility%20%3D%20%22hidden%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20clickTooltip.style.opacity%20%3D%20%220%22%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%201500)%3B%0A%20%20%20%20%20%20%20%20%7D).catch(err%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20console.error(%22Failed%20to%20copy%20text%3A%20%22%2C%20err)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20document.querySelectorAll(%22.copy-on-click-link%22).forEach(link%20%3D%3E%0A%20%20%20%20%20%20handleCopy(link%2C%20%22.h4.m-small%22%2C%20%22tooltip-above%22)%0A%20%20%20%20)%3B%0A%0A%20%20%20%20document.querySelectorAll(%22.email-link-icon24%22).forEach(link%20%3D%3E%0A%20%20%20%20%20%20handleCopy(link%2C%20%22.copy-email%22%2C%20%22tooltip-below%22)%0A%20%20%20%20)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E%5D"
                    />
                    <_Builtin.Link
                      className="invert"
                      button={false}
                      block="inline"
                      options={{
                        href: "https://www.linkedin.com/company/builders-studio/",
                        target: "_blank",
                      }}
                    >
                      <_Builtin.Image
                        className="image-103"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67d4359cf2547f8255821f2c_Group%201171276431.svg"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="email-link-icon24"
                      button={false}
                      block="inline"
                      options={{
                        href: "mailto:hello@builders.studio",
                      }}
                    >
                      <_Builtin.Image
                        className="image-103 invert"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67d4359cfdf9dba83b3532f0_Vector%20mail.svg"
                      />
                      <_Builtin.Block className="copy-email" tag="div">
                        {
                          "This is some text inside of a div block.hello@builders.studio"
                        }
                      </_Builtin.Block>
                      <_Builtin.Block className="tooltip" tag="div" />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="invert"
                      button={false}
                      block="inline"
                      options={{
                        href: "https://maps.app.goo.gl/oX3tAuYxSz6V5Uw9A",
                        target: "_blank",
                      }}
                    >
                      <_Builtin.Image
                        className="image-103"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67d4359c78b5e0cbf8cd2a83_vector%20map.svg"
                      />
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="nav__menu-list is--footer align-down"
                    tag="div"
                  >
                    <_Builtin.Link
                      className="text__link-wrapper is--menu innactive hide"
                      button={false}
                      id="nav_footer_link"
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className="text__link is--footer innactive"
                        tag="div"
                        id="nav_footer_link"
                      >
                        {"Blog"}
                        <br />
                        {"‍"}
                        <_Builtin.Span className="link-span">
                          {"(coming soon)"}
                        </_Builtin.Span>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text__link-underline is--menu"
                        tag="div"
                      />
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Paragraph className="paragraph-22 is--color-dark50">
                    {"© 2025 Builders | Rotterdam, NL"}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="ultra-gradient-wrapper ftr"
          data-w-id="ba2bd4cd-58ce-67ef-1e19-098785a94ac9"
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className="gradient-animation-custom-css"
            value="%3Cstyle%3E%0A%20%20.gradient-animation-shape%20%7B%0A%20%20%20%20-webkit-backface-visibility%3A%20hidden%3B%0A%20%20%20%20-moz-backface-visibility%3A%20hidden%3B%0A%20%20%20%20-webkit-transform%3A%20translate3d(0%2C%200%2C%200)%3B%0A%20%20%20%20-moz-transform%3A%20translate3d(0%2C%200%2C%200)%3B%0A%20%20%7D%0A%3C%2Fstyle%3E"
          />
          <_Builtin.HtmlEmbed
            className="space-grid ftr-w"
            value="%3Csvg%20width%3D%221440%22%20height%3D%221151%22%20viewBox%3D%220%200%201440%201151%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20opacity%3D%220.3%22%3E%0A%3Cline%20opacity%3D%220.1%22%20x1%3D%22-95.0713%22%20y1%3D%22108.807%22%20x2%3D%221474.4%22%20y2%3D%22108.807%22%20stroke%3D%22url(%23paint0_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3Cline%20opacity%3D%220.3%22%20x1%3D%22-95.0713%22%20y1%3D%22323.85%22%20x2%3D%221474.4%22%20y2%3D%22323.85%22%20stroke%3D%22url(%23paint1_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3Cline%20opacity%3D%220.3%22%20x1%3D%22-95.0713%22%20y1%3D%22538.889%22%20x2%3D%221474.4%22%20y2%3D%22538.889%22%20stroke%3D%22url(%23paint2_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3Cline%20opacity%3D%220.3%22%20x1%3D%22-95.0713%22%20y1%3D%22753.932%22%20x2%3D%221474.4%22%20y2%3D%22753.932%22%20stroke%3D%22url(%23paint3_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3Cline%20opacity%3D%220.2%22%20x1%3D%22-95.0713%22%20y1%3D%22968.975%22%20x2%3D%221474.4%22%20y2%3D%22968.975%22%20stroke%3D%22url(%23paint4_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3Cline%20opacity%3D%220.3%22%20x1%3D%221351.74%22%20y1%3D%226.71075e-08%22%20x2%3D%221351.74%22%20y2%3D%22916.923%22%20stroke%3D%22url(%23paint5_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3Cline%20opacity%3D%220.3%22%20x1%3D%221136.7%22%20y1%3D%226.71075e-08%22%20x2%3D%221136.7%22%20y2%3D%22803.135%22%20stroke%3D%22url(%23paint6_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3Cline%20opacity%3D%220.3%22%20x1%3D%22921.655%22%20y1%3D%226.71075e-08%22%20x2%3D%22921.655%22%20y2%3D%221115.39%22%20stroke%3D%22url(%23paint7_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3Cline%20opacity%3D%220.3%22%20x1%3D%22706.614%22%20y1%3D%226.71075e-08%22%20x2%3D%22706.614%22%20y2%3D%221115.39%22%20stroke%3D%22url(%23paint8_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3Cline%20opacity%3D%220.3%22%20x1%3D%22491.572%22%20y1%3D%226.71075e-08%22%20x2%3D%22491.572%22%20y2%3D%221115.39%22%20stroke%3D%22url(%23paint9_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3Cline%20opacity%3D%220.3%22%20x1%3D%22276.53%22%20y1%3D%226.71075e-08%22%20x2%3D%22276.53%22%20y2%3D%221197.42%22%20stroke%3D%22url(%23paint10_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3Cline%20opacity%3D%220.2%22%20y1%3D%22-0.587546%22%20x2%3D%221267.06%22%20y2%3D%22-0.587546%22%20transform%3D%22matrix(-0.00278222%200.999996%20-0.999977%20-0.00671614%2060.9004%200)%22%20stroke%3D%22url(%23paint11_linear_7093_12045)%22%20stroke-width%3D%221.17509%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_7093_12045%22%20x1%3D%22-95.0713%22%20y1%3D%22109.895%22%20x2%3D%221474.4%22%20y2%3D%22109.895%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_7093_12045%22%20x1%3D%22-95.0713%22%20y1%3D%22324.938%22%20x2%3D%221474.4%22%20y2%3D%22324.938%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_7093_12045%22%20x1%3D%22-95.0713%22%20y1%3D%22539.977%22%20x2%3D%221474.4%22%20y2%3D%22539.977%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_7093_12045%22%20x1%3D%22-95.0713%22%20y1%3D%22755.02%22%20x2%3D%221474.4%22%20y2%3D%22755.02%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_7093_12045%22%20x1%3D%22-95.0713%22%20y1%3D%22970.062%22%20x2%3D%221474.4%22%20y2%3D%22970.062%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_7093_12045%22%20x1%3D%221350.65%22%20y1%3D%22-5.71083e-08%22%20x2%3D%221350.65%22%20y2%3D%22916.923%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint6_linear_7093_12045%22%20x1%3D%221135.61%22%20y1%3D%22-5.71083e-08%22%20x2%3D%221135.61%22%20y2%3D%22803.135%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint7_linear_7093_12045%22%20x1%3D%22920.567%22%20y1%3D%22-5.71083e-08%22%20x2%3D%22920.567%22%20y2%3D%221115.39%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint8_linear_7093_12045%22%20x1%3D%22705.526%22%20y1%3D%22-5.71083e-08%22%20x2%3D%22705.526%22%20y2%3D%221115.39%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint9_linear_7093_12045%22%20x1%3D%22490.484%22%20y1%3D%22-5.71083e-08%22%20x2%3D%22490.484%22%20y2%3D%221115.39%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint10_linear_7093_12045%22%20x1%3D%22275.442%22%20y1%3D%22-5.71083e-08%22%20x2%3D%22275.442%22%20y2%3D%221197.42%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint11_linear_7093_12045%22%20x1%3D%220%22%20y1%3D%220.5%22%20x2%3D%221267.06%22%20y2%3D%220.5%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.33%22%2F%3E%0A%3Cstop%20offset%3D%220.73%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className="main-shapes-wrapper" tag="div">
            <_Builtin.Block className="shape-3-ftr-wht" tag="div" />
            <_Builtin.Block className="shape-2-ftr" tag="div" />
            <_Builtin.Block className="shape-1-ftr" tag="div" />
          </_Builtin.Block>
          <_Builtin.Block className="blending-group-wrapper" tag="div">
            <_Builtin.Block className="shape-8-ftr" tag="div" />
            <_Builtin.Block className="shape-9-ftr" tag="div" />
            <_Builtin.Block className="shape-4-ftr2" tag="div" />
            <_Builtin.Block className="shape-7-ftr" tag="div" />
            <_Builtin.Block className="shape-6-ftr" tag="div" />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="div-block-174" tag="div">
          <_Builtin.Image
            className="footer-logo-big"
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/67cf5ae43cd3b6f3d9ca35f9_builders%20gradient%20logo.svg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
