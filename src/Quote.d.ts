import * as React from "react";
import * as Types from "./types";

declare function Quote(props: {
  as?: React.ElementType;
  quote?: React.ReactNode;
  quoteName?: React.ReactNode;
  quoteFunction?: React.ReactNode;
}): React.JSX.Element;
