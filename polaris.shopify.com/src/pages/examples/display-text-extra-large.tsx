import { DisplayText } from "@shopify/polaris";
import React from "react";
import { withPolarisExample } from "../../components/PolarisExampleWrapper";

function DisplayExample() {
  return <DisplayText size="extraLarge">Good evening, Dominic.</DisplayText>;
}

export default withPolarisExample(DisplayExample);
