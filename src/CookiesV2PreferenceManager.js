"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CookiesV2PreferenceManager({
  as: _Component = _Builtin.Block,
}) {
  return (
    <_Component
      className="cookie-preference_component"
      tag="div"
      fs-cc="preferences"
      fs-cc-scroll="disable"
    >
      <_Builtin.Block
        className="cookie-preference_background"
        tag="div"
        fs-cc="close"
      />
      <_Builtin.Block className="cookie-preference_wrapper" tag="div">
        <_Builtin.Block className="cookie-modal_component" tag="div">
          <_Builtin.Link
            className="cookie-modal_closebutton is-sticky"
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
              {"Close Cookie Preference Manager"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Block className="cookie-modal_content-wrap" tag="div">
            <_Builtin.Block className="cookie-modal_title" tag="div">
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
                }}
              >
                {"More info"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.FormWrapper className="cookie-modal_form-wrap">
              <_Builtin.FormForm
                className="cookie-modal_form"
                name="wf-form-ck-form"
                data-name="ck-form"
                method="get"
                id="ck-form"
              >
                <_Builtin.Block
                  className="cookie-modal_radio is--not-allowed w-clearfix"
                  tag="div"
                >
                  <_Builtin.Block
                    className="cookie-modal_radio_button is-always-active"
                    tag="div"
                  />
                  <_Builtin.Block
                    className="cookie-modal_radio_label is--not-allowed"
                    tag="div"
                  >
                    {"Strictly Necessary (Always Active)"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="cookie-modal_radio_description is--not-allowed"
                    tag="div"
                  >
                    {"Cookies required to enable basic website functionality."}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.FormCheckboxWrapper className="cookie-modal_radio w-clearfix">
                  <_Builtin.FormCheckboxInput
                    className="cookie-modal_radio_button"
                    type="checkbox"
                    name="Fs-Marketing"
                    data-name="Fs Marketing"
                    required={false}
                    checked={false}
                    fs-cc-checkbox="marketing"
                    id="fs__marketing"
                    form={{
                      type: "checkbox-input",
                      name: "Fs Marketing",
                    }}
                    inputType="custom"
                    customClassName="w-checkbox-input--inputType-custom"
                  />
                  <_Builtin.FormInlineLabel
                    className="cookie-modal_radio_label"
                    htmlFor="fs__marketing-2"
                  >
                    {"Marketing"}
                  </_Builtin.FormInlineLabel>
                  <_Builtin.Block
                    className="cookie-modal_radio_description"
                    tag="div"
                  >
                    {
                      "Cookies used to deliver advertising that is more relevant to you and your interests."
                    }
                  </_Builtin.Block>
                </_Builtin.FormCheckboxWrapper>
                <_Builtin.FormCheckboxWrapper className="cookie-modal_radio w-clearfix">
                  <_Builtin.FormCheckboxInput
                    className="cookie-modal_radio_button"
                    type="checkbox"
                    name="Fs-Personalization"
                    data-name="Fs Personalization"
                    required={false}
                    checked={false}
                    fs-cc-checkbox="personalization"
                    id="fs__personalization"
                    form={{
                      type: "checkbox-input",
                      name: "Fs Personalization",
                    }}
                    inputType="custom"
                    customClassName="w-checkbox-input--inputType-custom"
                  />
                  <_Builtin.FormInlineLabel
                    className="cookie-modal_radio_label"
                    htmlFor="fs__personalization-2"
                  >
                    {"Personalization"}
                    <br />
                  </_Builtin.FormInlineLabel>
                  <_Builtin.Block
                    className="cookie-modal_radio_description"
                    tag="div"
                  >
                    {
                      "Cookies allowing the website to remember choices you make (such as your user name, language, or the region you are in)."
                    }
                  </_Builtin.Block>
                </_Builtin.FormCheckboxWrapper>
                <_Builtin.FormCheckboxWrapper className="cookie-modal_radio w-clearfix">
                  <_Builtin.FormCheckboxInput
                    className="cookie-modal_radio_button"
                    type="checkbox"
                    name="Fs-Analytics"
                    data-name="Fs Analytics"
                    required={false}
                    checked={false}
                    fs-cc-checkbox="analytics"
                    id="fs__analytics"
                    form={{
                      type: "checkbox-input",
                      name: "Fs Analytics",
                    }}
                    inputType="custom"
                    customClassName="w-checkbox-input--inputType-custom"
                  />
                  <_Builtin.FormInlineLabel
                    className="cookie-modal_radio_label"
                    htmlFor="fs__analytics-2"
                  >
                    {"Analytics"}
                    <br />
                  </_Builtin.FormInlineLabel>
                  <_Builtin.Block
                    className="cookie-modal_radio_description"
                    tag="div"
                  >
                    {
                      "Cookies helping understand how this website performs, how visitors interact with the site, and whether there may be technical issues."
                    }
                  </_Builtin.Block>
                </_Builtin.FormCheckboxWrapper>
                <_Builtin.Block
                  className="cookie-modal_button-wrap in-pref-manger"
                  tag="div"
                >
                  <_Builtin.Link
                    className="cookie-modal_button"
                    button={false}
                    fs-cc="allow"
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className="cookie-modal_button_text"
                      tag="div"
                    >
                      {"Accept All Cookies"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="cookie-modal_button is-secondary"
                    button={false}
                    fs-cc="submit"
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className="cookie-modal_button_text is--dark"
                      tag="div"
                    >
                      {"Save Settings"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage className="hide-all" />
              <_Builtin.FormErrorMessage className="hide-all" />
            </_Builtin.FormWrapper>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
