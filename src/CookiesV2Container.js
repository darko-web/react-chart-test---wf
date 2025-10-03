"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CookiesV2Container({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="cookies-2" tag="div">
      <_Builtin.Block
        className="fs-cookie-popup"
        tag="div"
        fs-cc="banner"
        id="consentPopup"
      >
        <_Builtin.Block className="cookie-tag" tag="div">
          {"Cookies"}
        </_Builtin.Block>
        <_Builtin.Paragraph className="cookie-paragraph">
          {
            "We use cookies to make your visit to www.builders.studio even easier and more personal."
          }
          <br />
          <br />
        </_Builtin.Paragraph>
        <_Builtin.Paragraph className="cookie-paragraph is-link">
          <_Builtin.Link
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {
              "To find out more about the cookies we use, have a look at our Privacy Policy."
            }
          </_Builtin.Link>
          <br />
        </_Builtin.Paragraph>
        <_Builtin.Block
          className="button-wrapper-2 w-clearfix"
          id="w-node-_787ba293-89bf-a7f4-299e-b3fe6228e3b1-6228e3a5"
          tag="div"
        >
          <_Builtin.Link
            className="button-5 accept"
            id="w-node-_787ba293-89bf-a7f4-299e-b3fe6228e3b2-6228e3a5"
            button={true}
            fs-cc="allow"
            block=""
            options={{
              href: "#",
            }}
          >
            {"Accept all"}
          </_Builtin.Link>
          <_Builtin.Link
            className="button-5 deny"
            id="w-node-_787ba293-89bf-a7f4-299e-b3fe6228e3b4-6228e3a5"
            button={true}
            fs-cc="deny"
            block=""
            options={{
              href: "#",
            }}
          >
            {"Deny"}
          </_Builtin.Link>
          <_Builtin.Link
            className="preferences-link"
            id="w-node-_787ba293-89bf-a7f4-299e-b3fe6228e3b6-6228e3a5"
            button={false}
            fs-cc="open-preferences"
            block=""
            options={{
              href: "#",
            }}
          >
            {"Manage settings"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="fs-preferences-manager-wrapper"
        tag="div"
        fs-cc="preferences"
      >
        <_Builtin.Block className="preferences-container" tag="div">
          <_Builtin.Block className="privacy-title" tag="div">
            {"Preferences"}
          </_Builtin.Block>
          <_Builtin.Paragraph className="paragraph-11">
            {
              "Privacy is important to us, so you have the option of disabling certain types of storage that may not be necessary for the basic functioning of the website. Blocking categories may impact your experience on the website. "
            }
            <_Builtin.Link
              className="link-privacy"
              button={false}
              target="_blank"
              block=""
              options={{
                href: "https://www.osano.com/legal/cookies",
              }}
            >
              {"More information"}
            </_Builtin.Link>
            <br />
          </_Builtin.Paragraph>
          <_Builtin.Link
            className="button-5"
            button={true}
            fs-cc="allow"
            block=""
            options={{
              href: "#",
            }}
          >
            {"Accept all cookies"}
          </_Builtin.Link>
          <_Builtin.Link
            className="close-button-2"
            button={false}
            fs-cc="close"
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className="image-47"
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/66053a6dc5d4001dce962229_np_close_25798_27313D.svg"
            />
          </_Builtin.Link>
          <_Builtin.FormWrapper className="consents-form">
            <_Builtin.FormForm
              className="w-clearfix"
              name="email-form"
              data-name="Email Form"
              method="get"
              id="email-form"
            >
              <_Builtin.Block className="grid-3" tag="div">
                <_Builtin.Block className="text-div" tag="div">
                  <_Builtin.FormBlockLabel
                    className="cookie-tag is-option"
                    htmlFor="name"
                  >
                    {"Essential"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Paragraph className="paragraph-11">
                    {
                      "These items are required to enable basic website functionality."
                    }
                    <br />
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className="paragraph-11 bold"
                  id="w-node-_787ba293-89bf-a7f4-299e-b3fe6228e3ce-6228e3a5"
                >
                  {"Always active"}
                  <br />
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block className="grid-3" tag="div">
                <_Builtin.Block className="text-div" tag="div">
                  <_Builtin.FormBlockLabel
                    className="cookie-tag is-option"
                    htmlFor="name"
                  >
                    {"Marketing"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Paragraph className="paragraph-11">
                    {
                      "These items are used to deliver advertising that is more relevant to you and your interests. "
                    }
                    <br />
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.FormCheckboxWrapper id="w-node-_787ba293-89bf-a7f4-299e-b3fe6228e3d8-6228e3a5">
                  <_Builtin.FormCheckboxInput
                    className="checkbox"
                    type="checkbox"
                    name="checkbox-4"
                    data-name="Checkbox 4"
                    required={false}
                    checked={false}
                    fs-cc-checkbox="marketing"
                    id="checkbox-4"
                    form={{
                      type: "checkbox-input",
                      name: "Checkbox 4",
                    }}
                    inputType="custom"
                    customClassName="w-checkbox-input--inputType-custom"
                  />
                  <_Builtin.FormInlineLabel className="checkbox-label" />
                </_Builtin.FormCheckboxWrapper>
              </_Builtin.Block>
              <_Builtin.Block className="grid-3" tag="div">
                <_Builtin.Block className="text-div" tag="div">
                  <_Builtin.FormBlockLabel
                    className="cookie-tag is-option"
                    htmlFor="name"
                  >
                    {"Personalization"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Paragraph className="paragraph-11">
                    {
                      "These items allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features. "
                    }
                    <br />
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.FormCheckboxWrapper id="w-node-_787ba293-89bf-a7f4-299e-b3fe6228e3e2-6228e3a5">
                  <_Builtin.FormCheckboxInput
                    className="checkbox"
                    type="checkbox"
                    name="checkbox-3"
                    data-name="Checkbox 3"
                    required={false}
                    checked={false}
                    fs-cc-checkbox="personalization"
                    id="checkbox-3"
                    form={{
                      type: "checkbox-input",
                      name: "Checkbox 3",
                    }}
                    inputType="custom"
                    customClassName="w-checkbox-input--inputType-custom"
                  />
                  <_Builtin.FormInlineLabel className="checkbox-label" />
                </_Builtin.FormCheckboxWrapper>
              </_Builtin.Block>
              <_Builtin.Block
                className="grid-3"
                tag="div"
                fs-cc-checkbox="analytics"
              >
                <_Builtin.Block className="text-div" tag="div">
                  <_Builtin.FormBlockLabel
                    className="cookie-tag is-option"
                    htmlFor="name"
                  >
                    {"Analytics"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Paragraph className="paragraph-11">
                    {
                      "These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues. "
                    }
                    <br />
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.FormCheckboxWrapper id="w-node-_787ba293-89bf-a7f4-299e-b3fe6228e3ec-6228e3a5">
                  <_Builtin.FormCheckboxInput
                    className="checkbox"
                    type="checkbox"
                    name="checkbox-3"
                    data-name="Checkbox 3"
                    required={false}
                    checked={false}
                    fs-cc-checkbox="analytics"
                    id="checkbox-3"
                    form={{
                      type: "checkbox-input",
                      name: "Checkbox 3",
                    }}
                    inputType="custom"
                    customClassName="w-checkbox-input--inputType-custom"
                  />
                  <_Builtin.FormInlineLabel className="checkbox-label" />
                </_Builtin.FormCheckboxWrapper>
              </_Builtin.Block>
              <_Builtin.FormButton
                className="button-5 deny"
                type="submit"
                value="Reject all cookies"
                data-wait="Please wait..."
                fs-cc="deny"
              />
              <_Builtin.FormButton
                className="button-5 field-wrapper"
                type="submit"
                value="Confirm my choices"
                data-wait="Please wait..."
                fs-cc="submit"
              />
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage>
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="fs-manager-opener" tag="div" fs-cc="manager">
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          fs-cc="open-preferences"
          alt=""
          src="https://cdn.prod.website-files.com/607d4c4996652042f5845166/66053a6dc5d4001dce962227_np_cookie_80793_FFFFFF.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
