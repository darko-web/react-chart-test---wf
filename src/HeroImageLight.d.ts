import * as React from "react";
import * as Types from "./types";

declare function HeroImageLight(props: {
  as?: React.ElementType;
  heroTitle?: React.ReactNode;
  heroImage?: Types.Asset.Image;
  heroIntro?: React.ReactNode;
}): React.JSX.Element;
