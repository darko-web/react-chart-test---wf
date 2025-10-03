"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-813"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".links__item","originalId":"65df2f8d11108e7b1e626e96|acdf9535-5cda-8b90-0d01-18ac573bc032","appliesTo":"CLASS"},"targets":[{"selector":".links__item","originalId":"65df2f8d11108e7b1e626e96|acdf9535-5cda-8b90-0d01-18ac573bc032","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1620372522377},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-139"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".links__item","originalId":"65df2f8d11108e7b1e626e96|acdf9535-5cda-8b90-0d01-18ac573bc032","appliesTo":"CLASS"},"targets":[{"selector":".links__item","originalId":"65df2f8d11108e7b1e626e96|acdf9535-5cda-8b90-0d01-18ac573bc032","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1620372522377}},"actionLists":{"a-13":{"id":"a-13","title":"links__item-mouse-over","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".links__arrow","selectorGuids":["a5361ff6-9063-71a9-ad05-4f835adeb90e"]},"xValue":0,"xUnit":"em","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-13-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".links__arrow","selectorGuids":["a5361ff6-9063-71a9-ad05-4f835adeb90e"]},"xValue":0.5,"xUnit":"em","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1620372525607},"a-14":{"id":"a-14","title":"links__item-mouse-out","actionItemGroups":[{"actionItems":[{"id":"a-14-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".links__arrow","selectorGuids":["a5361ff6-9063-71a9-ad05-4f835adeb90e"]},"xValue":0,"xUnit":"em","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1620372525607}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LayoutLinks({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="links__item-wrapper" tag="div">
      <_Builtin.Link
        className="links__item"
        button={false}
        block="inline"
        options={{
          href: "#",
        }}
      >
        <_Builtin.Block className="links__item-content" tag="div">
          <_Builtin.Paragraph className="text__body">
            {"Link item 1"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className="links__arrow"
          value="%3Csvg%20viewBox%3D%220%200%2047%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%2011.979H44%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M21.998%201L43.998%2011.9779L21.998%2023%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Link>
      <_Builtin.Link
        className="links__item"
        button={false}
        block="inline"
        options={{
          href: "#",
        }}
      >
        <_Builtin.Block className="links__item-content" tag="div">
          <_Builtin.Paragraph className="text__body">
            {"Link item 2"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className="links__arrow"
          value="%3Csvg%20viewBox%3D%220%200%2047%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%2011.979H44%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M21.998%201L43.998%2011.9779L21.998%2023%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Link>
      <_Builtin.Link
        className="links__item"
        button={false}
        block="inline"
        options={{
          href: "#",
        }}
      >
        <_Builtin.Block className="links__item-content" tag="div">
          <_Builtin.Paragraph className="text__body">
            {"Link item 3"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className="links__arrow"
          value="%3Csvg%20viewBox%3D%220%200%2047%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%2011.979H44%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3Cpath%20d%3D%22M21.998%201L43.998%2011.9779L21.998%2023%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%2210%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Link>
    </_Component>
  );
}
