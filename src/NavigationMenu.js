"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-312"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"},"targets":[{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1618828770164},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-317"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"},"targets":[{"selector":".text__link-wrapper","originalId":"65df2f8d11108e7b1e626efe|652c9df4-18aa-54dc-25e1-cc02bf28387d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1618828770166},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-313"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".nav__menu-btn-wrp","originalId":"c53681be-1370-2b93-6513-02fa10ef323b","appliesTo":"CLASS"},"targets":[{"selector":".nav__menu-btn-wrp","originalId":"c53681be-1370-2b93-6513-02fa10ef323b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1618842482651},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-324"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".nav__menu-btn-wrp","originalId":"c53681be-1370-2b93-6513-02fa10ef323b","appliesTo":"CLASS"},"targets":[{"selector":".nav__menu-btn-wrp","originalId":"c53681be-1370-2b93-6513-02fa10ef323b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1618842482651},"e-68":{"id":"e-68","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-69"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5833dea3-08d8-b519-0be8-041cd389b326","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5833dea3-08d8-b519-0be8-041cd389b326","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1660225376333},"e-69":{"id":"e-69","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-68"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5833dea3-08d8-b519-0be8-041cd389b326","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5833dea3-08d8-b519-0be8-041cd389b326","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1660225376334}},"actionLists":{"a":{"id":"a","title":"text__link-wrapper-over","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1618828773957},"a-2":{"id":"a-2","title":"text__link-wrapper-out","actionItemGroups":[{"actionItems":[{"id":"a-2-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-2-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"outQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".text__link-underline","selectorGuids":["9f41995e-7a72-3590-fb7b-5539d579fa76"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1618828773957},"a-3":{"id":"a-3","title":"nav__menu-active","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav__menu-wrapper","selectorGuids":["7228457e-a819-86ca-1fbb-d20c7df07c8b"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-3-n-7","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav__menu-icon","selectorGuids":["baf0edc3-b3c7-7789-d687-cf448e1e9427"]},"value":18}},{"id":"a-3-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".overlay.is--menu","selectorGuids":["8eda298f-cb7d-db6d-67e9-20b54afc1c7e","b4052327-800f-7f32-ccc7-71d53420e666"]},"value":0,"unit":""}},{"id":"a-3-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".overlay.is--menu","selectorGuids":["8eda298f-cb7d-db6d-67e9-20b54afc1c7e","b4052327-800f-7f32-ccc7-71d53420e666"]},"value":"none"}}]},{"actionItems":[{"id":"a-3-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.62,0.009,0.094,0.997],"duration":600,"target":{"selector":".nav__menu-wrapper","selectorGuids":["7228457e-a819-86ca-1fbb-d20c7df07c8b"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-3-n-8","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".nav__menu-icon","selectorGuids":["baf0edc3-b3c7-7789-d687-cf448e1e9427"]},"value":42}},{"id":"a-3-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".overlay.is--menu","selectorGuids":["8eda298f-cb7d-db6d-67e9-20b54afc1c7e","b4052327-800f-7f32-ccc7-71d53420e666"]},"value":"block"}},{"id":"a-3-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"outQuad","duration":600,"target":{"selector":".overlay.is--menu","selectorGuids":["8eda298f-cb7d-db6d-67e9-20b54afc1c7e","b4052327-800f-7f32-ccc7-71d53420e666"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1618842487035},"a-4":{"id":"a-4","title":"nav__menu-inactive","actionItemGroups":[{"actionItems":[{"id":"a-4-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.62,0.009,0.094,0.997],"duration":600,"target":{"selector":".nav__menu-wrapper","selectorGuids":["7228457e-a819-86ca-1fbb-d20c7df07c8b"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-4-n-7","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".nav__menu-icon","selectorGuids":["baf0edc3-b3c7-7789-d687-cf448e1e9427"]},"value":18}},{"id":"a-4-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":600,"target":{"selector":".overlay.is--menu","selectorGuids":["8eda298f-cb7d-db6d-67e9-20b54afc1c7e","b4052327-800f-7f32-ccc7-71d53420e666"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".overlay.is--menu","selectorGuids":["8eda298f-cb7d-db6d-67e9-20b54afc1c7e","b4052327-800f-7f32-ccc7-71d53420e666"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1618842487035},"a-42":{"id":"a-42","title":"text__link-wrapper-over investor link","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"bce6dcb6-ae0c-bfd1-1a7f-bd5d6ba3f7d9"},"widthValue":0,"widthUnit":"ch","heightUnit":"PX","locked":false}},{"id":"a-42-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"bce6dcb6-ae0c-bfd1-1a7f-bd5d6ba3f7d9"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-42-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuint","duration":600,"target":{"useEventTarget":"CHILDREN","id":"bce6dcb6-ae0c-bfd1-1a7f-bd5d6ba3f7d9"},"widthValue":7,"widthUnit":"ch","heightUnit":"PX","locked":false}},{"id":"a-42-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":400,"target":{"useEventTarget":"CHILDREN","id":"bce6dcb6-ae0c-bfd1-1a7f-bd5d6ba3f7d9"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1618828773957},"a-43":{"id":"a-43","title":"text__link-wrapper-out investor link","actionItemGroups":[{"actionItems":[{"id":"a-43-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuint","duration":600,"target":{"useEventTarget":"CHILDREN","id":"bce6dcb6-ae0c-bfd1-1a7f-bd5d6ba3f7d9"},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-43-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"outQuint","duration":400,"target":{"useEventTarget":"CHILDREN","id":"bce6dcb6-ae0c-bfd1-1a7f-bd5d6ba3f7d9"},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1618828773957}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavigationMenu({
  as: _Component = _Builtin.Block,
  navigationMenuAdressDetails = (
    <>
      {"+31 858 081 802"}
      <br />
      <br />
      {"Stationsplein 45"}
      <br />
      {"Unit E1.156 (1st floor)"}
      <br />
      {"3013 AK Rotterdam"}
      <br />
      {"The Netherlands"}
      <br />
    </>
  ),
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="nav__menu-wrapper" tag="div">
      <_Builtin.NotSupported _atom="DynamoWrapper" />
      <_Builtin.Block className="nav__menu-list is--bottom" tag="div">
        <_Builtin.Block
          className="text-link-wrap_investor-space margin-bottom-small"
          data-w-id="5833dea3-08d8-b519-0be8-041cd389b326"
          tag="div"
        >
          <_Builtin.Link
            className="text__link is--color-dark mid"
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Careers"}
          </_Builtin.Link>
          <_Builtin.Block
            className="text__link-underline is--menu is-careers"
            data-w-id="bce6dcb6-ae0c-bfd1-1a7f-bd5d6ba3f7d9"
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block className="nav__menu-info" tag="div">
          <_Builtin.Link
            className="text__link-wrapper is--menu-small"
            button={false}
            block="inline"
            options={{
              href: "mailto:hello@builders.studio",
            }}
          >
            <_Builtin.Block className="text__link is--menu" tag="div">
              {"hello@builders.studio"}
            </_Builtin.Block>
            <_Builtin.Block className="text__link-underline" tag="div" />
          </_Builtin.Link>
          <_Builtin.Block className="text__body is--small" tag="div">
            {"Stationsplein 45"}
            <br />
            {"Unit E1.156 / 1st floor"}
            <br />
            {"3013 AK Rotterdam"}
            <br />
            {"The Netherlands"}
            <br />
          </_Builtin.Block>
          <_Builtin.Block tag="div" />
        </_Builtin.Block>
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Block>
    </_Component>
  );
}
